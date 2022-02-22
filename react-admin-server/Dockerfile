# ①編譯階段
FROM node as builder
WORKDIR /react-admin
ADD . /react-admin
# ②部署階段
FROM node:latest
WORKDIR /react-admin/react-admin-server
COPY --from=builder /react-admin /react-admin
RUN cd /react-admin/react-admin-server && yarn
ENTRYPOINT ["yarn","start"]