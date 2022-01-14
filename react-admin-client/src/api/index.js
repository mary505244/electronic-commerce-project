import axios from './request';
import {BASE_URL, A_MAP_URL, CITY_CODE, A_MAP_KEY} from '../config/index';

//登錄
export const reqLogin = (username, password) => (axios.post(`${BASE_URL}/login`, {username, password}))

//商品分類列表
export const reqCategoryList = () => (axios.get(`${BASE_URL}/manage/category/list`))

//更新商品分類
export const reqUpdateCategory = (categoryId, categoryName) => (axios.post(`${BASE_URL}/manage/category/update`, {
    categoryId,
    categoryName
}))

//新增商品分類
export const reqAddCategory = (categoryName) => (axios.post(`${BASE_URL}/manage/category/add`, {categoryName}))

//獲取商品分類信息
export const reqCategoryView = (categoryId) => (
    axios.get(`${BASE_URL}/manage/category/info`, {
        params: {
            categoryId
        }
    })
)

//發送獲取高德地圖天氣的請求
export const reqWeather = () => (axios.get(`${A_MAP_URL}/v3/weather/weatherInfo`, {
    params: {
        key: A_MAP_KEY,
        city: CITY_CODE,
        output: 'JSON',
        extensions: 'base'
    }
}))

//商品分頁列表
export const reqProductPaginationList = (pageNum, pageSize) => (axios.get(`${BASE_URL}/manage/product/list`, {
    params: {
        pageNum,
        pageSize
    }
}))


//更新商品狀態
export const reqProductUpdateStatus = (productId, status) => (axios.post(`${BASE_URL}/manage/product/updateStatus`, {
    productId,
    status
}))

//搜索商品分頁列表
export const reqProductSearchPaginationList = (pageNum, pageSize, searchType, searchKey) => (axios.get(`${BASE_URL}/manage/product/search`, {
    params: {
        pageNum,
        pageSize,
        [searchType]: searchKey
    }
}))

//商品的詳細信息
export const reqProductView = (productId) => (axios.get(`${BASE_URL}/manage/product/info`, {
    params: {productId}
}))

//新增商品
export const reqAddProduct = (categoryId, name, price, desc, status, imgs, detail) => (axios.post(`${BASE_URL}/manage/product/add`, {
    categoryId,
    name,
    price,
    desc,
    status,
    imgs,
    detail
}))

//根據圖片唯一名刪除圖片
export const reqDeletePicture = name => (axios.post(`${BASE_URL}/manage/img/delete`, {name}))

//更新商品信息
export const reqUpdateProduct = (categoryId, name, price, desc, status, imgs, detail, _id) => (axios.post(`${BASE_URL}/manage/product/update`, {
    categoryId,
    name,
    price,
    desc,
    status,
    imgs,
    detail,
    _id
}))

//添加角色
export const reqAddRole = roleName => (axios.post(`${BASE_URL}/manage/role/add`, {roleName}));

//角色分頁列表
export const reqRolePaginationList = (pageNum, pageSize) => (axios.get(`${BASE_URL}/manage/role/list`, {
    params: {
        pageNum,
        pageSize
    }
}))

//分配權限
export const reqAllocatePermission = (id, menus, authName) => (axios.post(`${BASE_URL}/manage/role/update`, {
    _id: id,
    menus,
    auth_name: authName
}))

//分頁顯示用戶列表
export const reqUserList = () => (axios.get(`${BASE_URL}/manage/user/list`))

//創建用戶
export const reqAddUser = (username, password, email, phone, role_id) => (axios.post(`${BASE_URL}/manage/user/add`, {
    username,
    password,
    email,
    phone,
    role_id
}))

//刪除用戶
export const reqDeleteUser = (userId) => (axios.post(`${BASE_URL}/manage/user/delete`, {userId}))

// 修改用戶
// export const reqUpdateUser = (_id, username, email, phone, role_id) => (axios.post(`${BASE_URL}/manage/user/update`, {
//     _id, 
//     username, 
//     email, 
//     phone, 
//     role_id
// }))