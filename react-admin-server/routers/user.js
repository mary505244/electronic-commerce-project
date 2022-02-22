const md5 = require('blueimp-md5');
const UserModel = require('../models/UserModel');
const RoleModel = require('../models/RoleModel');

/*
註冊用戶管理路由
*/
module.exports = function (router) {
    // 添加用戶
    router.post('/manage/user/add', (req, res) => {
        // 讀取請求參數數據
        const {username, password} = req.body
        // 處理: 判斷用戶是否已經存在, 如果存在, 返回提示錯誤的信息, 如果不存在, 保存
        // 查詢(根據username)
        UserModel.findOne({username})
            .then(user => {
                // 如果user有值(已存在)
                if (user) {
                    // 返回提示錯誤的信息
                    res.send({status: 1, msg: '此用戶已存在'})
                    return new Promise(() => {
                    })
                } else { // 沒值(不存在)
                    // 保存
                    return UserModel.create({...req.body, password: md5(password || 'atguigu')})
                }
            })
            .then(user => {
                // 返回包含user的json數據
                res.send({status: 0, data: user})
            })
            .catch(error => {
                console.error('註冊異常', error)
                res.send({status: 1, msg: '添加用戶異常, 請重新嘗試'})
            })
    })


    // 更新用戶
    router.post('/manage/user/update', (req, res) => {
        const user = req.body
        UserModel.findOneAndUpdate({_id: user._id}, user)
            .then(oldUser => {
                const data = Object.assign(oldUser, user)
                // 返回
                res.send({status: 0, data})
            })
            .catch(error => {
                console.error('更新用戶異常', error)
                res.send({status: 1, msg: '更新用戶異常, 請重新嘗試'})
            })
    })

    // 刪除用戶
    router.post('/manage/user/delete', (req, res) => {
        const {userId} = req.body
        UserModel.deleteOne({_id: userId})
            .then((doc) => {
                res.send({status: 0})
            })
    })

  // 獲取所有用戶列表
  router.get('/manage/user/list', (req, res) => {
    UserModel.find({username: {'$ne': 'admin'}})
      .then(users => {
        RoleModel.find().then(roles => {
          res.send({status: 0, data: {users, roles}})
        })
      })
      .catch(error => {
        console.error('獲取用戶列表異常', error)
        res.send({status: 1, msg: '獲取用戶列表異常, 請重新嘗試'})
      })
  })

}