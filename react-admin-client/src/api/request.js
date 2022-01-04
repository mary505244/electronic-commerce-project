/*
* axios全局配置
*/
import axios from 'axios'
// import {message} from 'antd';
import NProgress from 'nprogress'
// import store from '../redux/store'
// import {deleteUserAndToken} from "../redux/actions/login";
import 'nprogress/nprogress.css'


//配置請求攔截器
// axios.interceptors.request.use(
//     config => {
//         //進度條開始
//         NProgress.start();
//         //從redux中獲取之前保存的token
//         let token = store.getState()?.login?.token;
//         if (token) { //如果token存在，就設置到請求頭中
//             config.headers.Authorization = `bearer ${token}`;
//         }
//         return config;
//     }, error => {
//         return Promise.reject(error);
//     }
// )

//配置響應攔截器
// axios.interceptors.response.use(
//     response => {
//         //進度條結束
//         NProgress.done();
//         //請求如果成功，走這裡
//         return response.data;
//     }, error => {
//         //進度條結束
//         NProgress.done();

//         if (error.response.status === 401) {//token有問題
//             const {status, msg} = error.response.data;
//             if (status === 2) {
//                 //提示消息
//                 message.error(`${msg}，請重新登錄`, 2);
//                 //分發刪除用戶信息的action
//                 store.dispatch(deleteUserAndToken());
//             }
//         }else{
//             //請求如果失敗，提示錯誤
//             message.error(error.message, 2);
//         }
//         //中斷Promise鏈
//         return new Promise(() => {
//         });
//     }
// )

export default axios