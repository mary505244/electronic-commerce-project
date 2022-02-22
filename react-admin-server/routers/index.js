/*
用來定義路由的路由器模塊
 */
const express = require('express')
const md5 = require('blueimp-md5')
const jwt = require('jsonwebtoken')

const {PRIVATE_KEY} = require('../config')
const UserModel = require('../models/UserModel')
const RoleModel = require('../models/RoleModel')


// 得到路由器對象
const router = express.Router()

// 登陸
router.post('/login', (req, res) => {
  const {username, password} = req.body
  // 根據username和password查詢數據庫users, 如果沒有, 返回提示錯誤的信息, 如果有, 返回登陸成功信息(包含user)
  UserModel.findOne({username, password: md5(password)}, {password: 0, __v: 0})
    .then(user => {
      if (user) { // 登陸成功
        //簽發token 指定過期時間 7 天  expiresIn: '7 days'
        const token = jwt.sign({id: user._id}, PRIVATE_KEY, { expiresIn: '7 days' });
        //const token = jwt.sign({id: user._id}, PRIVATE_KEY, { expiresIn: '15 s' });

        if (user.role_id) {
          RoleModel.findOne({_id: user.role_id})
            .then(role => {
              user._doc.role = role
              // 返回登陸成功信息(包含user和token)
              res.send({
                status: 0,
                data: {
                  user,
                  token
                }
              })
            })
        } else {
          user._doc.role = {menus: []}
          // 返回登陸成功信息(包含user和token)
          res.send({
            status: 0,
            data: {
              user,
              token
            }
          })
        }

      } else {// 登陸失敗
        res.send({status: 1, msg: '帳號或密碼不正確ㄛ！'})
      }
    })
    .catch(error => {
      console.error('登錄異常', error)
      res.send({status: 1, msg: '登錄異常',請稍後再試'})
    })
})

router.post('/check_token',(req,res)=>{
   res.status(200).json({
      status: 0,
      msg: 'token有效'
    })
})



require('./category')(router)
require('./product')(router)
require('./role')(router)
require('./user')(router)
require('./file-upload')(router)

module.exports = router