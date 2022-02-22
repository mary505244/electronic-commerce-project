/*
處理文件上傳的路由
 */
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const {SERVER_CONFIG} = require("../config");

const dirPath = path.join(__dirname, '..', 'public/upload')

const storage = multer.diskStorage({
  // destination: 'upload', //string時,服務啟動將會自動創建文件夾
  destination: function (req, file, cb) { //函數需手動創建文件夾
    // console.log('destination()', file)
    if (!fs.existsSync(dirPath)) {
      fs.mkdir(dirPath, function (err) {
        if (err) {
          console.log(err)
        } else {
          cb(null, dirPath)
        }
      })
    } else {
      cb(null, dirPath)
    }
  },
  filename: function (req, file, cb) {
    // console.log('filename()', file)
    var ext = path.extname(file.originalname)
    cb(null, file.fieldname + '-' + Date.now() + ext)
  }
})
const upload = multer({storage})
const uploadSingle = upload.single('image')

module.exports = function (router) {

  // 上傳圖片
  router.post('/manage/img/upload', (req, res) => {
    uploadSingle(req, res, function (err) { //錯誤處理
      if (err) {
        return res.send({
          status: 1,
          msg: '上傳文件失敗'
        })
      }
      var file = req.file
      res.send({
        status: 0,
        data: {
          name: file.filename,
          url: `http://localhost:${SERVER_CONFIG.port}/upload/` + file.filename
        }
      })

    })
  })

  // 刪除圖片
  router.post('/manage/img/delete', (req, res) => {
    const {name} = req.body
    fs.unlink(path.join(dirPath, name), (err) => {
      if (err) {
        console.log(err)
        res.send({
          status: 1,
          msg: '刪除文件失敗'
        })
      } else {
        res.send({
          status: 0
        })
      }
    })
  })
}