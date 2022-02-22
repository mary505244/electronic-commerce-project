const CategoryModel = require('../models/CategoryModel');
/*
註冊分類管理路由
*/
module.exports = function (router) {

    // 添加分類
    router.post('/manage/category/add', (req, res) => {
        const {categoryName} = req.body
        CategoryModel.findOne({name: categoryName})
            .then(category => {
                if (category) {
                    res.send({status: 1, msg: '此分類已存在'})
                } else {
                    CategoryModel.create({name: categoryName})
                        .then(category => {
                            res.send({status: 0, data: category})
                        })
                        .catch(error => {
                            console.error('添加分類異常', error)
                            res.send({status: 1, msg: '添加分類異常, 請重新嘗試'})
                        })
                }
            })


    })

    // 獲取分類列表
    router.get('/manage/category/list', (req, res) => {
        CategoryModel.find({})
            .then(categories => {
                res.send({status: 0, data: categories})
            })
            .catch(error => {
                console.error('獲取分類列表異常', error)
                res.send({status: 1, msg: '獲取分類列表異常, 請重新嘗試'})
            })
    })

    // 更新分類名稱
    router.post('/manage/category/update', (req, res) => {
        const {categoryId, categoryName} = req.body
        CategoryModel.findOneAndUpdate({_id: categoryId}, {name: categoryName})
            .then(oldCategory => {
                res.send({status: 0})
            })
            .catch(error => {
                console.error('更新分類名稱異常', error)
                res.send({status: 1, msg: '更新分類名稱異常, 請重新嘗試'})
            })
    })

    // 根據分類ID獲取分類
    router.get('/manage/category/info', (req, res) => {
        const categoryId = req.query.categoryId
        CategoryModel.findOne({_id: categoryId})
            .then(category => {
                res.send({status: 0, data: category})
            })
            .catch(error => {
                console.error('獲取分類信息異常', error)
                res.send({status: 1, msg: '獲取分類信息異常, 請重新嘗試'})
            })
    })
}