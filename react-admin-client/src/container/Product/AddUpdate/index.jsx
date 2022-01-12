import React, {Component, Fragment} from 'react';
import {Button, Card, Form, Input, Select, message} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {connect} from 'react-redux'
import {reqCategoryList, reqAddProduct, reqProductView, reqUpdateProduct} from '../../../api'
import PicturesWall from '../PicturesWall'
import RichTextEditor from "../RichTextEditor";

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
        title: '',//标题 新增或修改
        categoryList: [], //商品分类的列表
        categoryId: '',//分类的id
        name: '',//商品名称
        desc: '',//商品描述
        price: 0,//商品价格
        detail: '',//商品详情
        imgs: [], //图片
    }

    componentDidMount = async () => {
        //判断标题
        const {id} = this.props.location.state;
        if (id) {
            const {status, data, msg} = await reqProductView(id);
            if (status === 0) {
                const {name, desc, price, categoryId, detail, imgs} = data;
                this.setState({name, desc, price, categoryId, detail, imgs, title: '修改'}, () => {
                    /*
                    !这边是巨坑，需要注意,需要初始化表单列表
                    */
                    this.formRef.current.resetFields();
                    //回显照片
                    this.picturesWall.current.setImgArr(imgs);
                    //回显富文本
                    this.richTextEditor.current.setRichText(detail);
                });
            } else {
                message.error(msg, 2);
            }
        } else {
            this.setState({title: '添加'});
        }
        //初始化商品分类
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
        if (id) { //修改的逻辑
            const {categoryId, name, price, desc, productStatus} = values;
            //获取图片
            let imgArr = this.picturesWall.current.getImgArr();
            //获取富文本内容
            let richTextEditor = this.richTextEditor.current.getRichText();
            const {
                status,
                msg
            } = await reqUpdateProduct(categoryId, name, price, desc, productStatus, imgArr, richTextEditor, id);
            if (status === 0) {
                //提示
                message.success("更新商品成功", 2);
                //跳转到商品管理页面
                this.props.history.replace('/admin/products/product');
            } else {
                message.error(msg, 2);
            }
        } else { //新增的逻辑
            const {categoryId, name, price, desc, productStatus} = values;
            //获取图片
            let imgArr = this.picturesWall.current.getImgArr();
            //获取富文本内容
            let richTextEditor = this.richTextEditor.current.getRichText();
            const {
                status,
                msg
            } = await reqAddProduct(categoryId, name, price, desc, productStatus, imgArr, richTextEditor);
            if (status === 0) {
                //提示
                message.success("新增商品成功", 2);
                //跳转到商品管理页面
                this.props.history.replace('/admin/products/product');
            } else {
                message.error(msg, 2);
            }
        }
    }

    /**
     * 向后台获取商品分类列表数据
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
                        <ArrowLeftOutlined style={{marginRight: '20px', color: '#1DA57A'}} onClick={() => {
                            this.props.history.goBack()
                        }}/>
                        {`商品${title}`}
                    </Fragment>
                }>
                    <Form labelCol={{md: 2}} wrapperCol={{md: 16}} onFinish={this.handleFinish} ref={this.formRef}>
                        <Form.Item label="商品名称" name="name"
                                   initialValue={name || ''}
                                   rules={[{required: true, whitespace: true, message: '请输入商品名称'}]}>
                            <Input autoComplete="off" placeholder="请输入商品名称"/>
                        </Form.Item>
                        <Form.Item label="商品描述" name="desc"
                                   initialValue={desc || ''}
                                   rules={[{required: true, whitespace: true, message: '请输入商品描述'}]}>
                            <Input autoComplete="off" placeholder="请输入商品描述"/>
                        </Form.Item>
                        <Form.Item label="商品价格" name="price"
                                   initialValue={price || ''}
                                   rules={[{required: true, message: '请输入商品价格'}]}>
                            <Input type="number" autoComplete="off" addonBefore="￥" addonAfter="元"
                                   placeholder="请输入商品价格，必须是数值"/>
                        </Form.Item>
                        <Form.Item label="商品分类" name="categoryId"
                                   initialValue={categoryId || ''}
                                   rules={[{required: true, message: '请选择商品分类'}]}>
                            <Select allowClear placeholder={"请选择商品分类"}>
                                {
                                    categoryList.map(category => (
                                        <Option key={category._id} value={category._id}>{category.name}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label="商品图片">
                            <PicturesWall ref={this.picturesWall}/>
                        </Form.Item>
                        <Form.Item label="商品详情" wrapperCol={{md: 16}}>
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
