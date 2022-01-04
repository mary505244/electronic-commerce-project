import React, { Component } from 'react'
import { Form, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined  } from '@ant-design/icons';
import {connect} from 'react-redux'

import {reqLogin} from '../../api'
import {saveUserAndToken} from '../../redux/actions/login'

import './css/login.less'
import logo from './imgs/logo.png'
import lipstick from './imgs/lipstick.svg'

const {Item} = Form


 class Login extends Component {

     /**
     * 提交表单且数据验证成功后回调事件
     * @param values
     */

     onFinish = async(values) => {
        const {username, password} = values;
        let result = await reqLogin(username, password);
        console.log(result);
        const {status, msg} = result.data;
        if (status === 0) {
            //服务器返回的user信息和token信交由redux管理
            const {user, token} = result.data.data;
            this.props.saveUserAndToken({user, token});
            //提示登录成功
            message.success('登入成功！');
            //跳转到admin页面
            this.props.history.replace("/admin/home");
            // this.props.history.replace("/admin");
        } else {
            message.warn(msg, 2);
        }
      };
    
     onFinishFailed = (errorInfo) => {
        message.error(errorInfo);
      };


    render() {
        return (
            <div className='login'>
                <header>
                    <img className='logo' src={logo} alt="logo"/>
                    <h1>
                         美妝小物管理系統<img className='lipstick' src={lipstick} alt="lipstick"/>
                    </h1>
                </header>
                <section className="login-content">
                    <h2>管理員登錄</h2>
                    <Form onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                    <Item label="帳號" name="username" 
                        rules={[
                        {required: true,message: '帳號為必填寫欄位！'},
                        {min: 5,message: '帳號至少包含5個字元！'},
                        {max: 10,message: '帳號最多包含10個字元！'},
                        {pattern: /^\w+$/,message: '帳號只能由_、字母、數字所組成！'}
                        ]}
                    >
                        <Input className="username-prefix" prefix={<UserOutlined/>} placeholder="帳號請輸入5-10字元"/>
                    </Item>

                    <Item label="密碼" name="password"
                        rules={[
                        {required: true,message: '密碼為必填寫欄位！'},
                        {min: 5,message: '密碼至少包含5個字元！'},
                        {max: 10,message: '密碼最多包含10個字元！'},
                        {pattern: /^\w+$/,message: '密碼只能由_、字母、數字所組成！'}
                        ]}
                    >
                        <Input.Password className="password-prefix" prefix={<LockOutlined />} placeholder="密碼請輸入5-10字元"  />
                    </Item>

                    <Item>
                        <Button type="primary" htmlType="submit" className="login-button" >
                        登入
                        </Button>
                    </Item>
                    </Form>
                </section>
            </div>
        )
    }
}

export default connect(
    state => ({isLogin: state.login.isLogin}),
    // state => {},
    {
        saveUserAndToken
    }
)(Login)