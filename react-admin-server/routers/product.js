const ProductModel = require('../models/ProductModel');
const {pageFilter} = require('../utils')

/* 
註冊商品管理路由
*/
module.exports = function (router) {
  
  // 添加產品
  router.post('/manage/product/add', (req, res) => {
    const product = req.body
    console.log('product', product)
    ProductModel.findOne({name: product.name})
      .then(p => {
        if (p) {
          res.send({
            status: 1,
            msg: '此名稱商品已存在'
          })
        } else {
          ProductModel.create(product)
            .then(product => {
              res.send({
                status: 0,
                data: product
              })
            })
            .catch(error => {
              console.error('添加產品異常', error)
              res.send({
                status: 1,
                msg: '添加產品異常, 請重新嘗試'
              })
            })
        }
      })
    
  })

  // 獲取產品分頁列表
  router.get('/manage/product/list', (req, res) => {
    const {pageNum, pageSize} = req.query
    ProductModel.find({})
      .then(products => {
        res.send({status: 0, data: pageFilter(products.reverse(), pageNum, pageSize)})
      })
      .catch(error => {
        console.error('獲取商品列表異常', error)
        res.send({status: 1, msg: '獲取商品列表異常, 請重新嘗試'})
      })
  })

  // 搜索產品列表
  router.get('/manage/product/search', (req, res) => {
    const {pageNum, pageSize, searchName, productName, productDesc} = req.query
    let condition = {}
    if (productName) {
      condition = {name: new RegExp(`^.*${productName}.*$`)}
    } else if (productDesc) {
      condition = {desc: new RegExp(`^.*${productDesc}.*$`)}
    }
    ProductModel.find(condition)
      .then(products => {
        res.send({status: 0, data: pageFilter(products, pageNum, pageSize)})
      })
      .catch(error => {
        console.error('搜索商品列表異常', error)
        res.send({status: 1, msg: '搜索商品列表異常, 請重新嘗試'})
      })
  })

  // 根據商品id獲取商品對象
  router.get('/manage/product/info', (req, res) => {
    const productId = req.query.productId
    ProductModel.findOne({ _id: productId })
      .then(product => {
        res.send({
          status: 0,
          data: product
        })
      })
      .catch(error => {
        console.error('獲取商品異常', error)
        res.send({
          status: 1,
          msg: '獲取商品異常'
        })
      })
  })

  // 更新產品
  router.post('/manage/product/update', (req, res) => {
    const product = req.body
    ProductModel.findOneAndUpdate({_id: product._id}, product)
      .then(oldProduct => {
        res.send({status: 0})
      })
      .catch(error => {
        console.error('更新商品異常', error)
        res.send({status: 1, msg: '更新商品名稱異常, 請重新嘗試'})
      })
  })

  // 更新產品狀態(上架/下架)
  router.post('/manage/product/updateStatus', (req, res) => {
    const {productId, status} = req.body
    ProductModel.findOneAndUpdate({_id: productId}, {status})
      .then(oldProduct => {
        res.send({status: 0})
      })
      .catch(error => {
        console.error('更新產品狀態異常', error)
        res.send({status: 1, msg: '更新產品狀態異常, 請重新嘗試'})
      })
  })
}