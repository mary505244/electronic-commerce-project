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
        isModalVisible: false, //模態框是否顯示，默認為隱藏
        operatorType: 0, //操作類型 0表示新增，1表示修改
        isLoading: true, //表格加載效果，默認為true，表示加載
        updateModalCurrentId: '', //更新模態框中的Input組件的id值
        updateModalCurrentValue: '' //更新模態框中的Input組件的value值
    }

    formRef = React.createRef();

    componentDidMount() {
        this.getCategoryList();
    }

    //獲取分類列表數據
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
     * 顯示新增分類的彈窗
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
     * 顯示更新分類的彈窗
     */
     handleShowUpdateModal = (item) => {
        //回顯的數據
        const {_id: categoryId, name: categoryName} = item;
        //顯示模態框，並將回顯數據放到狀態中
        this.setState({
            updateModalCurrentId: categoryId,
            updateModalCurrentValue: categoryName,
            operatorType: 1,
            isModalVisible: true
        }, () => {
            //重置表單
            this.formRef.current.resetFields();
        })
    }

    /**
     * 處理確認模態框
     */
     handleOkModal = async () => {
        try {
            //表單的統一驗證
            const {categoryName} = await this.formRef.current.validateFields()
            this.setState({isLoading: false})
            const {operatorType} = this.state;
            if (operatorType === 0) {
                //新增分類的邏輯
                this.handleAddCategory(categoryName);
            } else {//修改分類
                const {updateModalCurrentId: categoryId} = this.state;
                //修改分類的邏輯
                this.handleUpdateCategory(categoryId, categoryName)
            }
        } catch (e) {
            message.error('表單輸入有誤，請檢查', 2);
        }
    }

    /**
     * 新增分類的業務邏輯
     */
     handleAddCategory = async (categoryName) => {
        const {status, msg} = await reqAddCategory(categoryName);
        if (status === 0) {
            message.success('新增商品分類名稱成功', 1);
            this.getCategoryList();
            //重置表單
            this.formRef.current.resetFields();
            //隱藏模態框
            this.setState({isModalVisible: false})
        } else {
            message.error(msg, 1);
        }
    }

    /**
     * 修改分類的業務邏輯
     */
     handleUpdateCategory = async (categoryId, categoryName) => {
        const {status, msg} = await reqUpdateCategory(categoryId, categoryName);
        if (status === 0) {
            message.success('更新商品分類名稱成功', 1);
            this.getCategoryList();
            //重置表單
            this.formRef.current.resetFields();
            //隱藏模態框
            this.setState({isModalVisible: false})
        } else {
            message.error(msg, 1);
        }
    }


    /**
     * 取消模態框
     */
     handleCancelModal = () => {
        //重置表單
        this.formRef.current.resetFields();
        //隱藏模態框
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
                {/* 新增分類和修改分類 */}
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
