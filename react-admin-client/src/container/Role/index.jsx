import React, {Component, Fragment} from 'react';
import {Button, Card, Form, Input, Modal, Table, message, Tree} from "antd";
import {PlusCircleOutlined, SafetyOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import {reqAddRole, reqRolePaginationList, reqAllocatePermission} from "../../api";
import {PAGE_SIZE} from "../../config";
import menuList from "../../config/menuConfig";
import {connect} from "react-redux";
import './index.less';

/**
 * 角色管理路由組件
 */
 @connect(
    state => ({
        userInfo: state.login,
    })
)
class Role extends Component {

    addFormRef = React.createRef();

    authFormRef = React.createRef();

    state = {
        isShowAdd: false, //是否顯示新增權限模態框
        isShowAuth: false,  //是否顯示分配權限模態框
        total: 0, //總數
        current: 1,//當前頁面
        dataSource: [], //角色列表
        _id: '',//分配角色的id
        checkedKeys: [], //樹形菜單選中的key
        treeData: [], //樹形菜單的數據
    }

    componentDidMount = async () => {
        const {current} = this.state;
        this.getRoleList(current, PAGE_SIZE);
        let treeData = [
            {
                title: '平台權限',
                key: 'top',
                children: [...menuList]
            }
        ]
        this.setState({
            treeData
        })
    }

    //獲取分頁列表
    getRoleList = async (current, pagesize) => {

        const {status, data, msg} = await reqRolePaginationList(current, pagesize);
        if (status === 0) {
            const {list, total} = data;
            this.setState({
                dataSource: list,
                current,
                total
            })
        } else {
            message.error(msg, 2)
        }
    }

    //表單變化
    handleTableChange = (pagination) => {
        const {current, pageSize} = pagination;
        this.getRoleList(current, pageSize);
    }

    //新增角色確認模態框
    handleAddOkModal = async () => {
        try {
            //表單的統一驗證
            const {roleName} = await this.addFormRef.current.validateFields()
            const {status, msg} = await reqAddRole(roleName);
            if (status === 0) {
                //取消模態框
                this.setState({isShowAdd: false}, () => {
                    //重置表單
                    this.addFormRef.current.resetFields();
                    //刷新角色
                    this.getRoleList();
                    //提示信息
                    message.success('新增角色成功', 2);
                    const {current} = this.state;
                    this.getRoleList(current, PAGE_SIZE);
                });
            } else {
                message.error(msg, 2);
            }
        } catch (e) {
            message.error('表單輸入有誤，請檢查', 2);
        }
    }

    
    //取消新增角色模態框
    handleAddCancelModal = () => {
        //重置表單
        this.addFormRef.current.resetFields();
        //取消模態框
        this.setState({isShowAdd: false});
    }

    //分配權限確認模態框
    handleAuthOkModal = async () => {
        //獲取選擇的key
        const {checkedKeys, _id} = this.state;
        //獲取授權人
        let authName = this.props.userInfo.user.username;
        const {status, msg} = await reqAllocatePermission(_id, checkedKeys, authName);
        if (status === 0) {
            message.success("分配權限成功", 2)
            //取消模態框
            this.setState({isShowAuth: false, checkedKeys: []}, () => {
                const {current} = this.state;
                this.getRoleList(current, PAGE_SIZE);
            });
        } else {
            message.error(msg, 2);
        }
    }

    //分配權限取消模態框
    handleAuthCancelModal = () => {
        //重置表單
        this.authFormRef.current.resetFields();
        //取消模態框
        this.setState({isShowAuth: false});
    }

    //分配權限按鈕的點擊事件
    allocatePermission = (item) => {
        const {dataSource} = this.state;
        //回顯菜單樹
        let menu = dataSource.find(menu => menu._id === item._id);
        if (menu) {
            let menus = menu.menus;
            if (menus && menus instanceof Array) {
                this.setState({checkedKeys:menus});
            }
        }
        //更新狀態
        this.setState({
            isShowAuth: true,
            _id: item._id
        })

    }

    render() {

        const columns = [
            {
                title: '角色名稱',
                dataIndex: 'name',
                key: 'name', 
                className:'name'
            },
            {
                title: '創建時間',
                dataIndex: 'create_time',
                key: 'create_time',
                className:'createTime',
                render: item => {
                    return dayjs(item).format('YYYY-MM-DD HH:mm:ss')
                }
            },
            {
                title: '授權時間',
                dataIndex: 'auth_time',
                key: 'auth_time',
                className:'authTime',
                render: item => {
                    if (item) {
                        return dayjs(item).format('YYYY-MM-DD HH:mm:ss')
                    }
                    return item;
                }
            },
            {
                title: '授權人',
                dataIndex: 'auth_name',
                key: 'auth_name', 
                className:'authName'
            },
            {
                title: '',
                key: 'operator',
                className:'operator',
                render: (item) => (
                    <Button className="permissButton" size="middle" type="dashed" icon={<SafetyOutlined />} onClick={() => this.allocatePermission(item)}>分配權限</Button>  
                )
            }
        ];

        
        const {isShowAdd, total, current, dataSource, isShowAuth, treeData} = this.state;

        return (
            <Fragment>
                <Card className="card" title={
                    <Button className="addRole" type="primary" icon={<PlusCircleOutlined/>} onClick={() => {
                        this.setState({isShowAdd: true})
                    }}>添加角色</Button>
                }>
                    <Table bordered={true} rowKey={"_id"} dataSource={dataSource} columns={columns}
                           pagination={{
                               current,
                               pageSize: PAGE_SIZE,
                               total,
                               showQuickJumper: true,
                               position:['bottomCenter']
                           }} onChange={this.handleTableChange}/>
                </Card>
                        {/* 添加角色模態框 */}
                        <Modal title={`添加角色`} visible={isShowAdd} onOk={this.handleAddOkModal}
                               onCancel={this.handleAddCancelModal} okText="確認" cancelText="取消">
                            <Form ref={this.addFormRef}>
                                <Form.Item name="roleName"
                                           rules={[{required: true, whitespace: true, message: '請輸入角色名稱'},]}>
                                    <Input placeholder="請輸入角色名稱" autoComplete="off"/>
                                </Form.Item>
                            </Form>
                        </Modal>
                {/* 分配角色模態框 */}
                <Modal title={`分配權限`} visible={isShowAuth} onOk={this.handleAuthOkModal}
                       onCancel={this.handleAuthCancelModal} okText="確認" cancelText="取消">
                    <Form ref={this.authFormRef}>
                        <Tree
                            defaultExpandAll
                            checkable
                            onCheck={(checkedKeysValue) => {
                                this.setState({checkedKeys: checkedKeysValue})
                            }}
                            checkedKeys={this.state.checkedKeys}
                            treeData={treeData}
                        />
                    </Form>
                </Modal>
            </Fragment>
        );
    }
}


export default Role
