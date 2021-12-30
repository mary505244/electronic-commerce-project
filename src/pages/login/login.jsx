import React, { Component } from 'react'
import './css/login.less'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined  } from '@ant-design/icons';

import logo from './imgs/logo.png'
import lipstick from './imgs/lipstick.svg'

const {Item} = Form


export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <header>
                    <img className='logo' src={logo} alt="logo"/>
                    <h1>
                         美妝小物管理系統<img className='lipstick' src={lipstick} />
                    </h1>
                </header>
                <section className="login-content">
                    <h2>管理員登錄</h2>
                    <Form>
                    <Item label="帳號" name="username" 
                        rules={[
                        {
                            required: true,
                            message: '帳號為必填寫欄位！',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined/>} placeholder="Username"/>
                    </Item>

                    <Item label="密碼" name="password"
                        rules={[
                        {
                            required: true,
                            message: '密碼為必填寫欄位！',
                        },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Password"  />
                    </Item>

                    <Item>
                        <Button type="primary" htmlType="submit" className="login-button">
                        登入
                        </Button>
                    </Item>
                    </Form>
                </section>
            </div>
        )
    }
}
