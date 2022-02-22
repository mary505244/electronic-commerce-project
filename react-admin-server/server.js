/*
應用的啟動模塊
1. 通過express啟動服務器
2. 通過mongoose連接數據庫
  說明: 只有當連接上數據庫後才去啟動服務器
3. 使用中間件
 */
const mongoose = require('mongoose')
const express = require('express')
const app = express() // 產生應用對象

// 聲明使用靜態中間件
app.use(express.static('public'))

// 聲明使用解析post請求的中間件
app.use(express.urlencoded({extended: true})) // 請求體參數是: name=tom&pwd=123
app.use(express.json()) // 請求體參數是json結構: {name: tom, pwd: 123}

// 聲明使用解析cookie數據的中間件
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// 設定CORS跨域
// app.use((req, res, next) => {
//   // 設置響應頭
//   res.set('Access-Control-Allow-Origin', '*');
//   // OPTIONS 預檢請求，當請求方式不是get和post / 請求頭包含非默認參數
//   // 預檢請求作用：檢查當前請求是否允許跨域
//   res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
//   res.set('Access-Control-Allow-Headers', 'content-type, authorization, accept');
//   res.set('Access-Control-Max-Age', 86400);
//   // 快速返回預檢請求響應
//   if (req.method.toLowerCase() === 'options') {
//     // 命中了預檢請求
//     return res.end();
//   }
//   next();
// });

// 聲明使用token驗證的中間件
app.use(require('./middleware/token-verify'))

// 聲明使用路由器中間件
const indexRouter = require('./routers')
app.use('/', indexRouter)

app.get('/test', function (req, res) {
    res.send({
        code: 0,
        data: 'hello react test'
    })
})

// 通過mongoose連接數據庫
const {SERVER_CONFIG, DB_CONFIG} = require('./config')
mongoose.connect(`mongodb://${DB_CONFIG.host}:${DB_CONFIG.port}/${DB_CONFIG.name}`, {useNewUrlParser: true})
    .then(() => {
        console.log('連接數據庫成功!!!')
        // 只有當連接上數據庫後才去啟動服務器
        app.listen(SERVER_CONFIG.port, () => {
            console.log(`服務器啟動成功, 請訪問: http://localhost:${SERVER_CONFIG.port}`)
        })
    })
    .catch(error => {
        console.error('連接數據庫失敗', error)
    })