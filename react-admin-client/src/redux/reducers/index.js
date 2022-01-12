/**
 * 該文件用於匯總所有的reducer為一個總的reducer。
 */
//引入combineReducers，用於匯總多個reducer
import {combineReducers} from "redux";
//引入為Login組件服務的reducer
import login from './login'
//引入為Admin組件（菜單）服務的reducer
import menu from './menu'
//引入為Product組件服務的reducer
import product from './product'
//引入為Category組件服務的reducer
import category from './category'

//該對象的key決定著store裡保存該狀態的key
//該對象的value決定著store裡保存該狀態的value


//匯總所有的reducer，變為一個總的reducer
export default combineReducers({
    login,
    menu,
    product,
    category
})