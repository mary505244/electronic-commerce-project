import React, {Component, Fragment} from 'react';
import {Button, Card, Form, Input, Select, message} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {connect} from 'react-redux'
import {reqCategoryList, reqAddProduct, reqProductView, reqUpdateProduct} from '../../../api'
import PicturesWall from '../PicturesWall'
import RichTextEditor from "../RichTextEditor";
import './index.less';

const {Option} = Select;

@connect(
    state => ({
        categoryList: state.category
    })
)
class AddUpdate extends Component {


    picturesWall = React.createRef();

    richTextEditor = React.createRef();

    formRef = React.createRef();

    state = {
        title: '',//標題 新增或修改
        categoryList: [], //商品分類的列表
        categoryId: '',//分類的id
        name: '',//商品名稱
        desc: '',//商品描述
        price: 0,//商品價格
        detail: '',//商品詳情
        imgs: [], //圖片
    }

    componentDidMount = async () => {
        //判斷標題
        const {id} = this.props.location.state;
        // console.log(this.props)
        if (id) {
            const {status, data, msg} = await reqProductView(id);
            if (status === 0) {
                const {name, desc, price, categoryId, detail, imgs} = data;
                // this.setState({name, desc, price, categoryId, detail, imgs, title: '修改'}, () => {
                this.setState({name, desc, price, categoryId}, () => {
                    //!大坑，需要注意,需要初始化表單列表                  
                    this.formRef.current.resetFields();
                });
                this.setState({detail, imgs, title: '修改'}, () => {
                    //回顯照片
                    this.picturesWall.current.setImgArr(imgs);
                    //回顯富文本
                    this.richTextEditor.current.setRichText(detail);
                });
            } else {
                message.error(msg, 2);
            }
        } else {
            this.setState({title: '添加'});
        }
        //初始化商品分類
        let reduxCategoryList = this.props.categoryList;
        if (reduxCategoryList.length) {
            this.setState({
                categoryList: reduxCategoryList
            })
        } else {
            this.getCategoryList();
        }

    }

    handleFinish = async (values) => {
        const {id} = this.props.location.state;
        if (id) { //修改的邏輯
            const {categoryId, name, price, desc, productStatus} = values;
            //獲取圖片
            let imgArr = this.picturesWall.current.getImgArr();
            //獲取富文本內容
            let richTextEditor = this.richTextEditor.current.getRichText();
            const {
                status,
                msg
            } = await reqUpdateProduct(categoryId, name, price, desc, productStatus, imgArr, richTextEditor, id);
            if (status === 0) {
                //提示
                message.success("更新商品成功", 2);
                //跳轉到商品管理頁面
                this.props.history.replace('/admin/products/product');
            } else {
                message.error(msg, 2);
            }
        } else { //新增的邏輯
            const {categoryId, name, price, desc, productStatus} = values;
            //獲取圖片
            let imgArr = this.picturesWall.current.getImgArr();
            //獲取富文本內容
            let richTextEditor = this.richTextEditor.current.getRichText();
            const {
                status,
                msg
            } = await reqAddProduct(categoryId, name, price, desc, productStatus, imgArr, richTextEditor);
            if (status === 0) {
                //提示
                message.success("新增商品成功", 2);
                //跳轉到商品管理頁面
                this.props.history.replace('/admin/products/product');
            } else {
                message.error(msg, 2);
            }
        }
    }

    /**
     * 向後台獲取商品分類列表數據
     */
    getCategoryList = async () => {
        const result = await reqCategoryList();
        const {status, msg, data} = result;
        if (status === 0) {
            this.setState({
                categoryList: data
            })
        } else {
            message.error(msg, 2);
        }
    }


    render() {
        const {title, categoryList, name, desc, price, categoryId} = this.state;

        return (
            <Fragment>
                <Card title={
                    <Fragment>
                        <ArrowLeftOutlined className="ArrowLeftOutlined" onClick={() => {
                            this.props.history.goBack()
                        }}/>
                        {`商品${title}`}
                    </Fragment>
                }>
                    <Form labelCol={{md: 2}} wrapperCol={{md: 16}} onFinish={this.handleFinish} ref={this.formRef}>
                        <Form.Item label="商品名稱" name="name"
                                   initialValue={name || ''}
                                   rules={[{required: true, whitespace: true, message: '請輸入商品名稱'}]}>
                            <Input autoComplete="off" placeholder="請輸入商品名稱"/>
                        </Form.Item>
                        <Form.Item label="商品描述" name="desc"
                                   initialValue={desc || ''}
                                   rules={[{required: true, whitespace: true, message: '請輸入商品描述'}]}>
                            <Input autoComplete="off" placeholder="請輸入商品描述"/>
                        </Form.Item>
                        <Form.Item label="商品價格" name="price"
                                   initialValue={price || ''}
                                   rules={[{required: true, message: '請輸入商品價格'}]}>
                            <Input type="number" autoComplete="off" addonBefore="＄" addonAfter="元"
                                   placeholder="請輸入商品價格，必須是數值"/>
                        </Form.Item>
                        <Form.Item label="商品分類" name="categoryId"
                                   initialValue={categoryId || ''}
                                   rules={[{required: true, message: '請選擇商品分類'}]}>
                            <Select allowClear placeholder={"請選擇商品分類"}>
                                {
                                    categoryList.map(category => (
                                        <Option key={category._id} value={category._id}>{category.name}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label="商品圖片" name="picture">
                            <PicturesWall ref={this.picturesWall}/>
                        </Form.Item>
                        <Form.Item label="商品詳情" name="detail" wrapperCol={{md: 16}}>
                            <RichTextEditor ref={this.richTextEditor}/>
                        </Form.Item>
                        <Form.Item wrapperCol={{offset: 8}}>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Fragment>
        );
    }
}

export default AddUpdate
