import axios from './request';
import {BASE_URL, A_MAP_URL, CITY_CODE, A_MAP_KEY} from '../config/index';


//登入
export const reqLogin = (username, password) => (axios.post(`${BASE_URL}/login`, {username, password}))
// export const reqLogin = (username, password) => (axios.post('login', {username, password}))
