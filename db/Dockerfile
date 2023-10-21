FROM mariadb:10.8

RUN apt update \
    && apt install --no-install-recommends -y tzdata \
    && apt clean

ADD ./conf.d/ /etc/mysql/conf.d/

RUN chmod 644 /etc/mysql/conf.d/my.cnf