#!make

cmd=current

PROJECT_NAME := board-game-maker
DOCKER_NETWORK := $(PROJECT_NAME)-network

#port
MYSQL_PORT := 3306
WEB_PORT := 3000

#containers name
DATABASE_CONTAINER := $(PROJECT_NAME)-db
WEB_CONTAINER := $(PROJECT_NAME)-web

#path
DATABASE_FOLDER := $(CURDIR)/db
WEB_FOLDER := $(CURDIR)/web
ENVFILE_FOLDER := $(CURDIR)/envfiles

##Network
.PHONY: network.create
network.create:
	@docker network create --driver bridge $(DOCKER_NETWORK)

.PHONY: network.remove
network.remove:
	@docker network rm $(DOCKER_NETWORK)

##Database
.PHONY: db.build
db.build:
	@docker build \
		-f $(DATABASE_FOLDER)/Dockerfile \
		-t $(DATABASE_CONTAINER) $(DATABASE_FOLDER) 

.PHONY: db.start
db.start:
	@docker run -d --rm \
		--env-file $(ENVFILE_FOLDER)/.db \
		--net $(DOCKER_NETWORK) \
		--name $(DATABASE_CONTAINER) \
		--volume $(DATABASE_FOLDER)/data:/var/lib/mysql:rw \
		--publish $(MYSQL_PORT):3306 \
		$(DATABASE_CONTAINER)

.PHONY: db.exec
db.exec:
	@docker exec -it $(DATABASE_CONTAINER) /bin/bash
		

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
	

