# 项目简介
* 前端（react-admin-client）：使用`React全家桶` + `Antd` + `Axios` + `ES6` + `Webpack`等技术。
* 后端（react-admin-server）：使用`Node` + `Express` + `MongoDB`等技术。

# 后端服务（react-admin-server）使用 docker-compose 构建
* 搭建 Docker 和 Docker-Compose 略。
* docker-compose 构建服务命令：

```shell
git clone https://gitlab.com/AncientFairy/react-admin.git
```

```shell
cd react-admin
```

```shell
docker-compose build --no-cache && docker-compose up -d
```

* 部署完毕后，会发现没有测试数据，可以使用 [navicat](https://www.yuque.com/fairy-era/yg511q/chqmin#q9nwL) 等客户端工具，将 [admin_db.sql](https://gitlab.com/AncientFairy/react-admin/-/blob/master/admin_db.sql) 执行一下。

![]("C:\Users\aUser\Desktop\螢幕擷取畫面 2022-02-02 010329.png")

![]("C:\Users\aUser\Desktop\123.gif")

