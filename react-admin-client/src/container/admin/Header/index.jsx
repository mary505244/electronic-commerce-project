import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Modal, Button} from 'antd';
import {LogoutOutlined, HeartOutlined} from '@ant-design/icons';
import './index.less'
import * as dayjs from 'dayjs'
import menuList from "../../../config/menuConfig";
import {connect} from "react-redux";
import {deleteUserAndToken} from "../../../redux/actions/login";
import {reqWeather} from '../../../api'

@connect(
    state => ({
        userInfo: state.login,
        title: state.menu
    }),
    {
        deleteUserAndToken
    }
)
@withRouter
class Header extends Component {

    state = {
        currentTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        weather: '',
        title: ''
    }

    componentDidMount = () => {
        //獲取天氣數據
        this.getWeather();
        //獲取系統時間
        this.getSystemTime();
        //刷新的時候，調用獲取標題頭
        let title = this.getTitle(menuList);
        this.setState({title})
    }

    componentWillUnmount() {
        //清除定時器
        clearInterval(this.timer);
    }
    
    //退出
    handleLogout = () => {
        Modal.confirm({
            title: '請問要登出嗎？',
            icon: <HeartOutlined style={{ fontSize: '20px', color: 'pink' }}/>,
            okText: '確定',
            cancelText: '取消',
            onOk: () => {
                this.props.deleteUserAndToken();
            }
        });
    }

    //獲取天氣
    getWeather = async () => {

        const {status, lives} = await reqWeather();
        if (status === "1") {
            lives.forEach(live => {
                this.setState({weather: live.weather})
            })
        }
    }

    //獲取系統時間
    getSystemTime = () => {
        //每隔1秒獲取當前時間，並更新狀態中的currentTime
        this.timer = setInterval(() => {
            this.setState({
                currentTime: dayjs().format("YYYY/MM/DD HH:mm"),
            })
        }, 1000);
    }

    /**
     * 獲取當前的顯示的標題，根據當前點擊的路徑到menuList中進行匹配
     *
     * 此方法應該只有兩個場景下才能調用：
     * ①用戶點擊菜單的時候，需要調用此方法
     * ②刷新的時候，需要調用此方法
     *
     * @param menuList
     * @returns {string}
     */
    getTitle = (menuList) => {
        //獲取當前點擊的路徑
        const {pathname} = this.props.location;
        //獲取key
        const key = this.selectedKey(pathname,menuList);
        //標題
        let title = '';
        menuList.forEach(item => {
            if (item.children instanceof Array) {
                let child = item.children.find(child => {
                    return child.key === key;
                })
                if (child) {
                    title = child.title;
                }
            } else {
                if (item.key === key) {
                    title = item.title;
                }
            }
        })

        return title;
    }


    /**
     * 獲取selectedKey
     *
     * 遍歷整個menuList，模糊匹配獲取最近的路由key
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
        const {currentTime, title} = this.state;
        const username = this.props?.userInfo?.user?.username;
        return (
            <div className="header">
                <div className="header-top">     
                    <span className="current-time">{currentTime}</span>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAHlBMVEXi7/rj7/pMaXHf6vPj7/rh7vjh7ffi7vjh7ffh7feN85fmAAAACnRSTlP79gCh2R9ttUaO7kcV+QAAA2hJREFUaN7t2r1P20AUAPBn1VLWPCUt7UiFgYzUSkRGK6kyYxU6J6VqVzcdyhgLIjGGKoQ/lwEuvu9PD1V19wf89N59vjsbPrbcIIIRjGAEIxjBCEYwgv84mF1elu2B2fpvnuf5411L4Don7bFsAczu86aN63DwW56bRCvwajfF/vTm533OtlHpBV79xpfWTWeceO4DXiNpANBfsuLCGcw2e68LAJAuDUkbwKxiPUHcOoJz5EFI2ZEuncDbxkMg7YARH1zAAYoBAsCE6UUHkOpAKkCARDfQOvCLPEBIDjRzUQOeFgoQEnqkx9bgCuUZ8+OysAQzZYBciENLkO5BHoSecpzVYKUDmYEurUB6DvJdCJDQc7G2AldaEDqqxaIEC2W6Qs5DG/BYy7Hrb2QDXhg8eiqObcDK4DG7WGkGM5MHsHQCB0aP7sTaDB7KJ4ti4izM4NwYIN2JFmBhDBDQGlzvpoU5QHpUtjrwqlIuN/VyfiqV4A80LRHpWTVSgFSdYAoQ4A29hT3JwQ06gB3m8PsuA281W6oJJCUEDX5FlwC5moQcp6A4Nt3B1wUI0sLIJmOugCD7LIhbqi2IHPiy6YB0hG0yFiJ8OVtAHqANCEtZxQ3SHrQDk5kkZwKeomsXAgDMxBIeZIWHNcjWnvmQAis/MBGqWZBmbA1ys7vcg0e+IFsq1ntwg+6DLCkVFwTM0BtkNp1PBBwEgHSIQwJeBIB0L54TcB4CJhKwCgGp2T16BYUxcQM7AngcBiYCeCKAXb+cCXgYCPZ4cBUIpvwozwNB5MENho3K/jAgK6UKBSfcWi5CwR6320jArtfUrtsGyY6NGJhzyp0pbYH7U0+SslvOyJ3LRWiICVc5VO2ATW1zhqE5N/cfxVp2PaiaKlux2ziGmHAV7CEGhpg2t2bFju0YYto8ZYD0nHcNsc/dUzIMFDvNFVdxLjuKPf6uN8cwccLfRo8wTPzDX8CP1aDVnUq80RfoTyb4QQRXGNLeiuBJEPggglkR4PVlT1UhOb+Tvc4NAsBf0ue+M/+M5a/E/sPyWfHs7B1irQB9e/G98lvA3K8HayV42kIPah6CLNuB9iPXrXvCC/1Xs40ruDV8KMwcxaHxU2Z2HRaf9snU1Ca235fXOwttdnMX/3OIYAQjGMEIRjCC/z/4DPQLL9/gazh/AAAAAElFTkSuQmCC"
                        alt="天氣圖標"/>   
                    <span className="username">Hello～{username}</span>
                    <Button type="primary" size="middle" onClick={this.handleLogout}
                            icon={<LogoutOutlined/>}>
                        登出
                    </Button>
                </div>
                <div className="header-bottom">
                    {/* <div className="header-bottom-left">{this.props.title || title}</div> */}
                </div>
            </div>
        );
    }
}

export default Header


