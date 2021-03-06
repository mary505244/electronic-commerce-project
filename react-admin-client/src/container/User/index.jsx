import React, {Component, Fragment} from 'react';
import {Button, Card, Form, Input, message, Modal, Select, Table} from "antd";
import {ExclamationCircleOutlined, PlusCircleOutlined, DeleteOutlined} from "@ant-design/icons";
import dayjs from "dayjs";
import {reqUserList, reqAddUser, reqDeleteUser} from '../../api'
import {PAGE_SIZE} from "../../config";
import './index.less';

const {Option} = Select;

/**
 * 用戶管理路由組件
 */
 export default class User extends Component {

    addFormRef = React.createRef();

    state = {
        userList: [], //用戶列表
        isShowAdd: false,
        roleList: [],//角色列表
    }

    componentDidMount = () => {
        this.getUserList();
    }

    getUserList = async () => {
        const {status, data, msg} = await reqUserList();
        if (status === 0) {
            const {users, roles} = data;
            this.setState({
                userList: users,
                roleList: roles
            })
        } else {
            message.error(msg, 2);
        }
    }

    //新增用戶確認的模態框
    handleAddOkModal = async () => {

        try {
            const {username, password, email, phone, role_id} = await this.addFormRef.current.validateFields();
            const {status, msg} = await reqAddUser(username, password, email, phone, role_id);
            if (status === 0) {
                message.success('新增使用者成功', 2);
                this.setState({isShowAdd: false}, () => {
                    this.getUserList();
                    this.addFormRef.current.resetFields();
                })
            } else {
                message.error(msg, 2);
            }
        } catch (e) {
            message.error('表單輸入有誤，請檢查', 2);
        }
    }

    /**
     * 刪除用戶
     * @param item
     */
     deleteUser = (item) => {
        return () => {
            const {_id: id} = item;
            Modal.confirm({
                title: '確認刪除嗎',
                icon: <ExclamationCircleOutlined/>,
                okText: '確認',
                cancelText: '取消',
                onOk: async () => {
                    const {status, msg} = await reqDeleteUser(id);
                    if (status === 0) {
                        message.info('刪除成功', 2);
                        this.getUserList();
                    } else {
                        message.error(msg, 2);
                    }
                }
            });
        }
    }

    render() {

        const columns = [
            {
                title: '使用者姓名',
                dataIndex: 'username',
                key: 'username',
                className:'username'
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                className:'email'
            },
            {
                title: '聯絡電話',
                dataIndex: 'phone',
                key: 'phone',
                className:'phone'
            },
            {
                title: '註冊時間',
                dataIndex: 'create_time',
                key: 'create_time',
                className:'createTime', 
                render: item => {
                    if (item) {
                        return dayjs(item).format('YYYY-MM-DD HH:mm:ss')
                    }
                    return item;
                }
            }, 
            {
                title: '所屬角色',
                dataIndex: 'role_id',
                key: 'role_id',
                className:'roleId',
                render: item => {
                    if (item) {
                        const {roleList} = this.state;
                        if (roleList.length) {
                            let role = roleList.find(role => {
                                return role._id === item;
                            })
                            if (role) {
                                return role.name;
                            }
                        }
                    }
                    return item;
                }
            },
            {
                title: '',
                key: 'operator',
                className:'operator',
                render: (item) => {
                    return (                       
                        <Fragment>
                            {/* <Button className="updateButton" size="small" type="dashed" icon={<FormOutlined/> }>修改資訊</Button><br/> */}
                            <Button className="viewButton" size="small" type="dashed" icon={<DeleteOutlined />} onClick={this.deleteUser(item)}>刪除使用者</Button>  
                        </Fragment>
                    );
                },
            }
        ];

        
        const {isShowAdd, userList, roleList} = this.state;


        return (
            <Fragment>
                <Card className="card" title={
                    <Button className="addUser" type="primary" icon={<PlusCircleOutlined/>} onClick={() => {
                        //顯示模態框
                        this.setState({isShowAdd: true}, () => {
                            //重置表單
                            this.addFormRef.current.resetFields();
                        })
                    }}>添加使用者</Button>
                }>
                    <Table bordered={true} rowKey={"_id"} dataSource={userList} columns={columns}
                        onChange={this.handleTableChange} pagination={{
                            pageSize: PAGE_SIZE,
                            position:['bottomCenter']
                        }}/>
                </Card>
                {/* 添加用戶的模態框 */}
                <Modal title={`添加使用者`} visible={isShowAdd} okText="確認" cancelText="取消" onOk={this.handleAddOkModal}
                    onCancel={() => {
                        this.setState({isShowAdd: false}, () => {
                            //重置表單
                            this.addFormRef.current.resetFields();
                        })
                }}>
                    <Form ref={this.addFormRef} labelCol={{md: 4}} wrapperCol={{md: 16}}>
                        <Form.Item label="使用者姓名" name="username"
                                   rules={[{required: true, whitespace: true, message: '請輸入使用者姓名'}]}>
                            <Input autoComplete="off" placeholder="請輸入使用者名稱"/>
                        </Form.Item>
                        <Form.Item label="密碼" name="password"
                                   rules={[{required: true, whitespace: true, message: '請輸入密碼'}]}>
                            <Input type={"password"} autoComplete="off" placeholder="請輸入密碼"/>
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input autoComplete="off" placeholder="請輸入Email"/>
                        </Form.Item>
                        <Form.Item label="聯絡電話" name="phone">
                            <Input autoComplete="off" placeholder="請輸入聯絡電話"/>
                        </Form.Item>
                        <Form.Item label="所屬角色" name="role_id"
                                   rules={[{required: true, message: '請選擇所屬角色'}]}>
                            <Select allowClear placeholder={"請選擇所屬角色"}>
                                {
                                    roleList.map(role => (
                                        <Option key={role._id} value={role._id}>{role.name}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>
                {/* 修改用戶的模態框 */}
                <Modal title={`修改使用者`} visible={false} okText="確認" cancelText="取消">
                    <Form>
                        修改使用者
                    </Form>
                </Modal>
            </Fragment>
        );
    }
}
