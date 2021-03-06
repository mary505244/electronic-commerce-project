/*
* 導航菜單配置
*/
const menuList = [
    {
        title: '首頁', //* 菜單標題名稱
        key: 'home', //展開的key
        path: '/admin/home', //* 對應的path
        icon: 'HomeOutlined' //* 圖標組件名稱
    },
    {
        title: '商品',
        key: 'products',
        path: '/admin/products',
        icon: 'GiftOutlined',
        children: [ //* 子菜單列表
            {
                title: '商品分類管理',
                key: 'category',
                path: '/admin/products/category',
                icon: 'HddOutlined',
            },
            {
                title: '商品管理',
                key: 'product',
                path: '/admin/products/product',
                icon: 'TagOutlined',
            }
        ]
    },
    {
        title: '使用者管理',
        key: 'user',
        path: '/admin/user',
        icon: 'UsbOutlined'
    },
    {
        title: '角色管理',
        key: 'role',
        path: '/admin/role',
        icon: 'UnlockOutlined'
    },
    {
        title: '圖形圖表',
        key: 'charts',
        path: '/admin/charts',
        icon: 'AreaChartOutlined',
        children: [
            {
                title: '柱狀圖',
                key: 'bar',
                path: '/admin/charts/bar',
                icon: 'BarChartOutlined',
            },
            {
                title: '摺線圖',
                key: 'line',
                path: '/admin/charts/line',
                icon: 'LineChartOutlined',
            },
            {
                title: '圓餅圖',
                key: 'pie',
                path: '/admin/charts/pie',
                icon: 'PieChartOutlined',
            }
        ]
    },
]

export default menuList;
