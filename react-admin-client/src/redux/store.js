//引入createStore，專門用於創建redux中最為核心的store對象
import {createStore, applyMiddleware} from 'redux'
//引入redux-thunk，用於支持異步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
//引入彙總之後的reducer
import reducers from './reducers'
//創建並暴露store對象 applyMiddleware(thunk)
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
