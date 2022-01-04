# 項目簡介
* 前端（react-admin-client）：使用`React全家桶` + `Antd` + `Axios` + `ES6` + `Webpack`等技術。
* 後端（react-admin-server）：使用`Node` + `Express` + `MongoDB`等技術。

# 後端服務（react-admin-server）使用 docker-compose 構建
* 搭建 Docker 和 Docker-Compose 略。
* docker-compose 構建服務命令：

```shell
git clone https://gitlab.com/AncientFairy/react-admin.git
```

```shell
cd react-admin
```

```shell
docker-compose build --no-cache && docker-compose up -d
```

* 部署完畢後，會發現沒有測試數據，可以使用 [navicat](https://www.yuque.com/fairy-era/yg511q/chqmin#q9nwL) 等客戶端工具，將 [admin_db.sql](https://gitlab.com/AncientFairy/react-admin/-/blob/master/admin_db.sql) 執行一下。

