/*
能操作users集合數據的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')
const md5 = require('blueimp-md5')

// 2.字義Schema(描述文檔結構)
const userSchema = new mongoose.Schema({
  username: {type: String, required: true}, // 用戶名
  password: {type: String, required: true}, // 密碼
  phone: String,
  email: String,
  create_time: {type: Number, default: Date.now},
  role_id: String
})

// 3. 定義Model(與集合對應, 可以操作集合)
const UserModel = mongoose.model('users', userSchema)

// 初始化默認超級管理員用戶: admin/admin
UserModel.findOne({username: 'admin'}).then(user => {
  if(!user) {
    UserModel.create({username: 'admin', password: md5('admin')})
            .then(user => {
              console.log('初始化用戶: 用戶名: admin 密碼為: admin')
            })
  }
})

// 4. 向外暴露Model
module.exports = UserModel