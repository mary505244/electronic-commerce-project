/*
能操作products集合數據的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')

// 2.字義Schema(描述文檔結構)
const productSchema = new mongoose.Schema({
  categoryId: {type: String, required: true}, // 所屬分類的id
  name: {type: String, required: true}, // 名稱
  price: {type: Number, required: true}, // 價格
  desc: {type: String},
  status: {type: Number, default: 1}, // 商品狀態: 1:在售, 2: 下架了
  imgs: {type: Array, default: []}, // n個圖片文件名的json字符串
  detail: {type: String}
})


// 3. 定義Model(與集合對應, 可以操作集合)
const ProductModel = mongoose.model('products', productSchema)

// 4. 向外暴露Model
module.exports = ProductModel