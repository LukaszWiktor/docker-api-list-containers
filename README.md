List running docker containers from another docker container.

Build docker image.

```
docker build -t dlsc . 
```

Run exposing docker deamon and returning logs.

```
docker run -v /var/run/docker.sock:/var/run/docker.sock -it dlsc
```

Or simply:

```
npm run build
npm start
```