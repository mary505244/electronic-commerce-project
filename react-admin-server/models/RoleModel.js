/*
能操作roles集合數據的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')

// 2.字義Schema(描述文檔結構)
const roleSchema = new mongoose.Schema({
  name: {type: String, required: true}, // 角色名稱
  auth_name: String, // 授權人
  auth_time: Number, // 授權時間
  create_time: {type: Number, default: Date.now}, // 創建時間
  menus: Array // 所有有權限操作的菜單path的數組
})

// 3. 定義Model(與集合對應, 可以操作集合)
const RoleModel = mongoose.model('roles', roleSchema)

// 4. 向外暴露Model
module.exports = RoleModel