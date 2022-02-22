/*
能操作categorys集合數據的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')

// 2.字義Schema(描述文檔結構)
const categorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  parentId: {type: String, required: true, default: '0'}
})

// 3. 定義Model(與集合對應, 可以操作集合)
const CategoryModel = mongoose.model('categorys', categorySchema)

// 4. 向外暴露Model
module.exports = CategoryModel