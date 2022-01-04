const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { "@primary-color": "#D05A6E" },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', style: true }],
            ['@babel/plugin-proposal-decorators', { legacy: true }]
        ]
    },
    //配置代理解决跨域
    devServer:{
        proxy: {
            "/api": {
                target: "http://localhost:5000",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            "/amap": {
                target: "https://restapi.amap.com/",
                changeOrigin: true,
                pathRewrite: {
                    "^/amap": ""
                }
            },
        }
    }
};
