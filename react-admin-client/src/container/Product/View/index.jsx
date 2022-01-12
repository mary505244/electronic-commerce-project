import React, {Component, Fragment} from 'react'
import {Button, Card, List, Typography, message} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {reqProductView, reqCategoryView} from "../../../api";
import {BASE_URL} from '../../../config'
import {connect} from "react-redux";
import './index.less';

@connect(
    state => ({
        productList: state.product,
        categoryList: state.category
    }),
    {}
)
class View extends Component {

    state = {
        name: '',
        desc: '',
        price: 0,
        categoryId: '',
        categoryName: '',
        detail: '',
        imgs: []
    }

    componentDidMount = async () => {
        const {id} = this.props.location.state;
        const reduxProductList = this.props.productList;
        if (reduxProductList && reduxProductList.length > 0) {
            let product = reduxProductList.find(item => item._id === id);
            if (product) {
                const {name, desc, price, categoryId, detail, imgs} = product;
                let categoryName = await this.getCategoryName(categoryId);
                this.setState({name, desc, price, categoryId, categoryName, detail, imgs})
            }
        } else {
            const {status, data, msg} = await reqProductView(id);
            if (status === 0) {
                const {name, desc, price, categoryId, detail, imgs} = data;
                let categoryName = await this.getCategoryName(categoryId);
                this.setState({name, desc, price, categoryId, categoryName, detail, imgs})
            } else {
                message.error(msg, 2)
            }
        }

    }

/**
     * 根據categoryId獲取categoryName
     * @param categoryId
     */
 getCategoryName = async (categoryId) => {
    let categoryName = '';
    if (categoryId) {
        let category = this.props.categoryList.find(item => item._id === categoryId);
        if (category) { //從redux中獲取
            categoryName = category.name;
        } else { //訪問後台服務器獲取
            const {status, data, msg} = await reqCategoryView(categoryId);
            if (status === 0) {
                const {name} = data;
                categoryName = name;
            } else {
                message.error(msg, 2)
            }
        }
    }
    return categoryName;
}


render() {
    const {name, desc, price, categoryName, detail, imgs} = this.state;
    return (
        <Card title={
            <Fragment>
                <Button size={"large"} type="link"
                        icon={<ArrowLeftOutlined onClick={() => {
                            this.props.history.goBack()
                        }}/>}>
                    <span>商品詳情</span>
                </Button>
            </Fragment>
        }>
        <List size={"large"}>
                    <List.Item>
                        <Typography.Text>
                            <span className="productName">商品名稱：</span>
                            <span>{name}</span>
                        </Typography.Text>
                    </List.Item>
                    <List.Item>
                        <Typography.Text>
                            <span className="productDesc">商品描述：</span>
                            <span>{desc}</span>
                        </Typography.Text>
                    </List.Item>
                    <List.Item>
                        <Typography.Text>
                            <span className="productPrice">商品價格：</span>
                            <span>{price}</span>
                        </Typography.Text>
                    </List.Item>
                    <List.Item>
                        <Typography.Text>
                            <span className="productCategory">所屬分類：</span>
                            <span>{categoryName}</span>
                        </Typography.Text>
                    </List.Item>
                    <List.Item>
                    <Typography.Text>
                            <span className="productPicture">商品圖片：</span>
                            <span>
                            {
                                imgs.map(item => {
                                    return (
                                        <img style={{width:'250px'}} key={item} src={`${BASE_URL}/upload/` + item} alt="商品圖片"/>
                                    )
                                })
                            }
                            </span>
                        </Typography.Text>
                    </List.Item>
                    <List.Item>
                        <Typography.Text>
                            <span className="productDetail">商品詳情：</span>
                            <span dangerouslySetInnerHTML={{__html: detail}}/>
                        </Typography.Text>

                    </List.Item>

                </List>
            </Card>
        )
    }
}

export default View
