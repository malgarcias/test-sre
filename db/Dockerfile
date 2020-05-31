FROM mysql:5.7
LABEL name=test-sre-db
LABEL version=1.0.0
ENV MYSQL_ROOT_PASSWORD=Passw0rd
ENV MYSQL_DATABASE=test-sre
ENV MYSQL_USER=test-sre
ENV MYSQL_PASSWORD=Passw0rd
EXPOSE 3306
ADD db.sql /docker-entrypoint-initdb.d