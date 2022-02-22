/*
  權限token驗證的中間件
 */
  const jwt = require('jsonwebtoken');
  const { PRIVATE_KEY, UN_CHECK_PATHS } = require('../config');
  
  module.exports = function (req, res, next) {
    const url = req.url;
  
    console.log(UN_CHECK_PATHS, url)
    // 如果是登錄請求，不進行驗證~
    // 此處可以配置白名單
    if (UN_CHECK_PATHS.indexOf(url) !== -1) {
      return next();
    }
  
    // 其他所有請求都要驗證token
    let token = req.headers['authorization'];  // sideProject_token值
  
    // 沒有token
    if (!token) {
      return res.status(401).json({
        status: 1,
        msg: '你沒有登錄，需要登錄才能使用'
      })
    }
  
    // 一開始值： sideProject token  --> 截取後面token
    token = token.substr(token.indexOf(' ') + 1);
  
    console.log(token);
  
    // 有token進行校驗
    jwt.verify(token, PRIVATE_KEY, (err, data) => {
      if (err) {
        // 驗證失敗~
        console.log('token驗證失敗', err.message);
  
        return res.status(401).json({
          status: 2,
          msg: 'token過期失效'
        })
      } else {
        // 驗證通過，添加到req上
        req.user = data; // {id: 12}
  
        return next();
      }
    })
  
  };