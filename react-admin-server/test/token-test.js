/* 
測試token的生成和校驗處理
*/
const jwt = require('jsonwebtoken')

// 生成token
function makeToken(userId) { // atguigu_token用於解碼的私鑰
  const token = jwt.sign({id: userId}, 'atguigu_token', { expiresIn: '5 s' })
  return token
}

// 檢驗token
function verifyToken(token) {
  jwt.verify(token, 'atguigu_token', (error, data) => {
    if (error) {
      console.log('校驗失敗', error.message)
    } else {
      console.log('校驗成功', data.id)
    }
  })
}

function test() {
  const token = makeToken(12)
  console.log('生成token', token)
  // 在有效期內進行校驗
  setTimeout(() => {
    verifyToken(token)
  }, 4000);

  // 過了有效期才進行校驗
  setTimeout(() => {
    verifyToken(token)
  }, 5000);
}

test()