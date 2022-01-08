import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import {Menu} from 'antd';
import * as Icon from '@ant-design/icons';
import {connect} from "react-redux";
import {saveTitle} from "../../../redux/actions/menu";
import './index.less';
// import logo from "../../../assets/images/logo.png";
import logo from "../../login/imgs/logo.png"
import menuList from "../../../config/menuConfig";

const {SubMenu} = Menu;

/**
 * 左侧导航的组件
 */
@connect(
    state => ({userInfo: state.login}),
    {
        saveTitle
    }
)
@withRouter
class LeftNav extends Component {

    /**
     * 根据menu的数据数组生成对应的标签数组
     * 使用map()+递归调用
     *
     * @param menuList
     */
    createMenu = (menuList) => {
        return menuList.map(menu => {
            /*
            * menu:
            *  {
            *        title: '首页', //* 菜单标题名称
            *        path: '/home', //* 对应的path
            *        icon: 'HomeOutlined', //* 图标组件名称
            *        children:[] //可能有，也有可能没有
            *  },
            */
            const icon = React.createElement(Icon[menu.icon], {}, null);
            if (!menu.children) {
                return (
                    <Menu.Item key={menu.key} icon={icon} onClick={() => this.props.saveTitle(menu.title)}>
                        <NavLink to={menu.path}>{menu.title}</NavLink>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={menu.key} icon={icon} title={menu.title}>
                        {
                            this.createMenu(menu.children)
                        }
                    </SubMenu>
                )
            }
        })
    }

    /**
     * 获取selectedKey
     *
     * 遍历整个menuList，模糊匹配获取最近的路由key
     * @param {*} pathname
     * @param {*} menuList
     */
    selectedKey = (pathname, menuList) => {
        let key = '';
        menuList.forEach(item => {
            if (item.children && item.children instanceof Array) {
                let child = item.children.find(child => {
                    return pathname.indexOf(child.path) !== -1;
                })
                if (child) {
                    key = child.key;
                }
            } else {
                if (pathname.indexOf(item.path) !== -1) {
                    key = item.key;
                }
            }
        })
        return key;
    }


    render() {
        let newMenuList;
        const {menus} = this.props.userInfo.user.role;
        // debugger
        if (menus && menus instanceof Array && menus.length) { //不是管理员
            newMenuList = menuList.filter(menu => {
                return menus.some((item) => {
                    return item === menu.key
                })
            })
        } else {
            newMenuList = menuList;
        }
        console.log(newMenuList);
        //当前的路由
        const {pathname} = this.props.location;
        //根据当前的路由去菜单配置列表中寻找选中的key
        let selectedKey = this.selectedKey(pathname, newMenuList);
        //默认打开的菜单
        let openKeys = pathname.split('/').splice(1);
        return (
            <div className="left-nav">
                <NavLink to="/admin/home" className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>美妝管理系统</h1>
                </NavLink>
                <Menu defaultSelectedKeys={selectedKey}
                      selectedKeys={selectedKey}
                      defaultOpenKeys={openKeys}
                      mode="vertical" theme="light">
                      
                    {
                        this.createMenu(newMenuList)
                    }
                </Menu>
            </div>
        );
    }
}

export default LeftNav

