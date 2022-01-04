/**
 * 該文件專門為Login組件生成action對象
 */
 import {SAVE_USER_AND_TOKEN} from '../action_types'
 import {DELETE_USER_AND_TOKEN} from '../action_types'
 
 //同步action，就是指action的值為object類型的一般對象
 export const saveUserAndToken = data => ({type: SAVE_USER_AND_TOKEN, data})
 export const deleteUserAndToken = () => ({type: DELETE_USER_AND_TOKEN});
 
 
 //異步action，就是指action的值為函數，異步action一般都會調用同步action