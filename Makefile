#!make

PROJECT_NAME := board-game-maker
DOCKER_NETWORK := $(PROJECT_NAME)-network

#port
WEB_PORT := 3000

#containers name
WEB_CONTAINER := $(PROJECT_NAME)-web

#path
WEB_FOLDER := $(CURDIR)/web
ENVFILE_FOLDER := $(CURDIR)/envfiles

##Network
.PHONY: network.create
network.create:
	@docker network create --driver bridge $(DOCKER_NETWORK)

.PHONY: network.remove
network.remove:
	@docker network rm $(DOCKER_NETWORK)


##NEXT JS (REACT)
.PHONY: web.build
web.build:
	@docker build \
		-f $(WEB_FOLDER)/Dockerfile \
		-t $(WEB_CONTAINER) $(WEB_FOLDER)

.PHONY: web.install
web.install:
	@docker run --rm \
		--name $(WEB_CONTAINER) \
		--volume $(WEB_FOLDER):/usr/src/web:rw \
		$(WEB_CONTAINER) yarn install

.PHONY: web.up
web.up:
	@docker run --rm -it \
		--env-file $(ENVFILE_FOLDER)/.web \
		--net $(DOCKER_NETWORK) \
		--name $(WEB_CONTAINER) \
		--volume $(WEB_FOLDER):/usr/src/web:rw \
		--publish $(WEB_PORT):3000 \
		$(WEB_CONTAINER)

.PHONY: web.lint
web.lint:
	@docker run --rm \
		--name $(WEB_CONTAINER) \
		--volume $(WEB_CONTAINER):/usr/src/web:rw \
		$(WEB_CONTAINER) yarn run lint
	@docker run --rm \
		--name $(WEB_CONTAINER) \
		--volume $(WEB_CONTAINER):/usr/src/web:rw \
		$(WEB_CONTAINER) yarn run format
	

