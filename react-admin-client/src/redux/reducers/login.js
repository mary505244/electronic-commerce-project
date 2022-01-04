import {SAVE_USER_AND_TOKEN, DELETE_USER_AND_TOKEN} from '../action_types'
import store from 'store'
import {LOGIN_FLAG_USER, LOGIN_FLAG_TOKEN} from '../../config'


//初始化的時候，從Local Storage中獲取用戶的信息
let user = store.get(LOGIN_FLAG_USER);
let token = store.get(LOGIN_FLAG_TOKEN);
const initState = {
    user: user || {},
    token: token || '',
    isLogin: user && token ? true : false
}

export default function login(prevState = initState, action) {
    const {type, data} = action;
    switch (type) {
        case SAVE_USER_AND_TOKEN:
            //將用戶登錄的信息保存到Local Storage中
            store.set(LOGIN_FLAG_USER, data.user);
            store.set(LOGIN_FLAG_TOKEN, data.token);
            //將用戶登錄的信息保存到redux中
            return {
                user: data.user,
                token: data.token,
                isLogin: true
            }
        case DELETE_USER_AND_TOKEN:
            //將用戶登錄的信息從Local Storage中刪除
            store.remove(LOGIN_FLAG_USER);
            store.remove(LOGIN_FLAG_TOKEN);
            return {
                user: {},
                token: '',
                isLogin: false
            }
        default:
            return prevState;
    }
}