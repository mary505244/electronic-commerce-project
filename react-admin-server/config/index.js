
// 開發/生產環境的標識 development
const isDev = process.env.NODE_ENV === 'development';

// 服務器與數據庫相關配置
let SERVER_CONFIG, DB_CONFIG;

// 由於目前沒有上線服務器，所以地址一致
if (isDev) {
    // 服務器配置
    SERVER_CONFIG = {
        port: 5000,
    };

    // 數據庫配置
    DB_CONFIG = {
        port: 27017,
        host: 'localhost',
        name: 'admin_db'
    };

} else {

    // 服務器配置
    SERVER_CONFIG = {
        port: 5000,
    };

    // 數據庫配置
    DB_CONFIG = {
        port: 27017,
        host: 'mongodb',
        name: 'admin_db'
    };

}

/*
配置token檢查白名單
不需要進行檢查token的所有路徑的數組
*/
const UN_CHECK_PATHS = ['/test', '/login', '/manage/img/upload'];

// token簽名加密的私鑰
const PRIVATE_KEY = 'sideProject_token';

module.exports = {
    SERVER_CONFIG,
    DB_CONFIG,
    PRIVATE_KEY,
    UN_CHECK_PATHS
};
