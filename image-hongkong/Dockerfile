FROM hub.deepin.com/library/node:16 AS builder
WORKDIR /linglong-homepage
ADD . .
RUN sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' .vitepress/config.js && \
    sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' guide/ll-builder/github.md && \
    sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' en/guide/ll-builder/github.md && \
    sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' .vitepress/theme/components/zh/header/index.vue && \
    sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' .vitepress/theme/components/en/header/index.vue && \
    sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' .vitepress/theme/components/zh/home/index.vue && \
    sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' .vitepress/theme/components/en/home/index.vue && \
    sed -i 's/https:\/\/repo-dev.linglong.space/https:\/\/mirror-repo-linglong.deepin.com/g' .vitepress/theme/components/zh/home/index.vue && \
    sed -i 's/https:\/\/repo-dev.linglong.space/https:\/\/mirror-repo-linglong.deepin.com/g' .vitepress/theme/components/en/home/index.vue && \
    yarn --registry=http://registry-npm.sndu.cn/ install && yarn build

FROM hub.deepin.com/library/nginx:latest
COPY --from=builder /linglong-homepage/.vitepress/dist/ /usr/share/nginx/html
