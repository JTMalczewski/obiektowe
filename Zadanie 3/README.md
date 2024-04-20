### To start:
```
$ ./gradlew clean build
$ java -jar build/libs/<generated file>
```

### To test:
```
curl -G http://localhost:8080/json -d "username=admin&password=password"
```