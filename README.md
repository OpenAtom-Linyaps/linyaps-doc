# Dockfile

```bash
docker build -t hub.deepin.com/wuhan_v23_linglong/linglong-homepage:develop-snipe .
```

```bash
docker run --rm -it  -p 80:80/tcp hub.deepin.com/wuhan_v23_linglong/linglong-homepage:develop-snipe
```

```bash
kubectl create deployment linglong-homepage --image=hub.deepin.com/wuhan_v23_linglong/linglong-homepage:develop-snipe
```

- 使用 18081 端口提供服务，连接到容器的 80 端口

```bash
kubectl expose deployment linglong-homepage --type=NodePort --port=18080 --target-port=80
```
