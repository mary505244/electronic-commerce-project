import axios from './request';
import {BASE_URL, A_MAP_URL, CITY_CODE, A_MAP_KEY} from '../config/index';


//登入
export const reqLogin = (username, password) => (axios.post(`${BASE_URL}/login`, {username, password}))

//商品分类列表
export const reqCategoryList = () => (axios.get(`${BASE_URL}/manage/category/list`))

//更新商品分类
export const reqUpdateCategory = (categoryId, categoryName) => (axios.post(`${BASE_URL}/manage/category/update`, {
    categoryId,
    categoryName
}))

//新增商品分类
export const reqAddCategory = (categoryName) => (axios.post(`${BASE_URL}/manage/category/add`, {categoryName}))

// 高德地圖天氣請求
export const reqWeather = () => (axios.get(`${A_MAP_URL}/v3/weather/weatherInfo`, {
    params: {
        key: A_MAP_KEY,
        city: CITY_CODE,
        output: 'JSON',
        extensions: 'base'
    }
}))