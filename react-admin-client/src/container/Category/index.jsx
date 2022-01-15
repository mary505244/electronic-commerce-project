import React, {Component} from 'react';
import {Card, Button, Table, message, Modal, Form, Input} from "antd";
import {FormOutlined, PlusCircleOutlined} from "@ant-design/icons";
import {reqCategoryList, reqAddCategory, reqUpdateCategory} from '../../api'
import {PAGE_SIZE} from '../../config'
import {connect} from "react-redux";
import {saveCategory} from "../../redux/actions/category";
import './index.less';

@connect(
    state => ({}),
    {
        saveCategory
    }
)
class Category extends Component {

    state = {
        dataSource: [],
        isModalVisible: false, //模态框是否显示，默认为隐藏
        operatorType: 0, //操作类型 0表示新增，1表示修改
        isLoading: true, //表格加载效果，默认为true，表示加载
        updateModalCurrentId: '', //更新模态框中的Input组件的id值
        updateModalCurrentValue: '' //更新模态框中的Input组件的value值
    }

    formRef = React.createRef();

    componentDidMount() {
        this.getCategoryList();
    }

    //获取分类列表数据
    getCategoryList = async () => {
        const {data, status, msg} = await reqCategoryList();

        this.setState({isLoading: false})

        if (status === 0) {
            this.props.saveCategory(data);
            this.setState({dataSource: data});
        } else {
            message.error(msg, 2);
        }

    }

    /**
     * 显示新增分类的弹窗
     */
    handleShowAddModal = () => {
        // this.formRef.current.resetFields();
        this.setState({
            operatorType: 0,
            isModalVisible: true,
            updateModalCurrentValue:''
        })
    }

    /**
     * 显示更新分类的弹窗
     */
    handleShowUpdateModal = (item) => {
        //回显的数据
        const {_id: categoryId, name: categoryName} = item;
        //显示模态框，并将回显数据放到状态中
        this.setState({
            updateModalCurrentId: categoryId,
            updateModalCurrentValue: categoryName,
            operatorType: 1,
            isModalVisible: true
        }, () => {
            //重置表单
            this.formRef.current.resetFields();
        })
    }

    /**
     * 处理确认模态框
     */
    handleOkModal = async () => {
        try {
            //表单的统一验证
            const {categoryName} = await this.formRef.current.validateFields()
            this.setState({isLoading: false})
            const {operatorType} = this.state;
            if (operatorType === 0) {
                //新增分类的逻辑
                this.handleAddCategory(categoryName);
            } else {//修改分类
                const {updateModalCurrentId: categoryId} = this.state;
                //修改分类的逻辑
                this.handleUpdateCategory(categoryId, categoryName)
            }
        } catch (e) {
            message.error('表单输入有误，请检查', 2);
        }
    }

    /**
     * 新增分类的业务逻辑
     */
    handleAddCategory = async (categoryName) => {
        const {status, msg} = await reqAddCategory(categoryName);
        if (status === 0) {
            message.success('新增商品分類名稱成功', 1);
            this.getCategoryList();
            //重置表单
            this.formRef.current.resetFields();
            //隐藏模态框
            this.setState({isModalVisible: false})
        } else {
            message.error(msg, 1);
        }
    }

    /**
     * 修改分类的业务逻辑
     */
    handleUpdateCategory = async (categoryId, categoryName) => {
        const {status, msg} = await reqUpdateCategory(categoryId, categoryName);
        if (status === 0) {
            message.success('更新商品分類名稱成功', 1);
            this.getCategoryList();
            //重置表单
            this.formRef.current.resetFields();
            //隐藏模态框
            this.setState({isModalVisible: false})
        } else {
            message.error(msg, 1);
        }
    }


    /**
     * 取消模态框
     */
    handleCancelModal = () => {
        //重置表单
        this.formRef.current.resetFields();
        //隐藏模态框
        this.setState({isModalVisible: false});
    }


    render() {

        const columns = [
            {
                title: '商品分類名稱',
                dataIndex: 'name',
                key: 'name',
                className: 'nameColumns'
            },
            {
                title: '',
                key: 'operator',
                className: 'operatorColumns',

                            // <Button className="updateButton" size="small" type="dashed" icon={<FormOutlined/>} onClick={() => {
                            //     this.handleShowUpdateModal(item)
                            // }}>修改資訊</Button>


                render: (item) => (
                    // <Button type="link" onClick={() => {
                    //     this.handleShowUpdateModal(item)
                    // }}>修改分類</Button>
                    <Button className="updateButton" size="middle" type="dashed" icon={<FormOutlined/>} onClick={() => {
                        this.handleShowUpdateModal(item)
                    }}>修改分類</Button>
                )
            }
        ];

        const {
            dataSource,
            isModalVisible,
            operatorType,
            isLoading,
            updateModalCurrentValue
        } = this.state;

        let title = operatorType === 0 ? '新增' : '修改';

        return (
            <div>
                
                <Card className="card" extra={<Button className="button" type="primary" onClick={this.handleShowAddModal}
                                     icon={<PlusCircleOutlined/>}>添加</Button>}>
                    <Table className="table" bordered={true} dataSource={dataSource} columns={columns} loading={isLoading} rowKey="_id"
                           pagination={{defaultPageSize: PAGE_SIZE, showQuickJumper: true, position:['bottomCenter']}} />   
                </Card>
                {/* 新增分类和修改分类 */}
                <Modal title={`${title}分類`} visible={isModalVisible} onOk={this.handleOkModal}
                       onCancel={this.handleCancelModal} okText="確認" cancelText="取消">
                    <Form className="login-form" ref={this.formRef}
                          initialValues={{categoryName: updateModalCurrentValue}}>
                        <Form.Item name="categoryName"
                                   rules={[{required: true, whitespace: true, message: '請输入商品分類名稱～'},]}>
                            <Input placeholder="請输入商品分類名稱～" autoComplete="off"/>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}


export default Category
