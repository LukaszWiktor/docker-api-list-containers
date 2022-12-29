List running docker containers from another docker container.

Build docker image.

```
docker build -t dockerode-spike . 
```

Run exposing docker deamon and returning logs.

```
docker run -v /var/run/docker.sock:/var/run/docker.sock -it dockerode-spike
```