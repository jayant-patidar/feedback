FROM openjdk:17-jdk-alpine
WORKDIR /app

COPY src /app/src
COPY pom.xml /app/
RUN mvn -f /home/app/pom.xml clean package

EXPOSE 8081
ENTRYPOINT ["java","-jar","/app/target/spring_rest_docker.jar"]