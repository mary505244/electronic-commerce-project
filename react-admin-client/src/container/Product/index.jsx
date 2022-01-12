import React, {Component, Fragment} from 'react';
import {Button, Card, Input, message, Select, Table} from "antd";
import {PlusCircleOutlined, SearchOutlined, FormOutlined, ReconciliationOutlined, NotificationOutlined} from "@ant-design/icons";
import {NavLink} from 'react-router-dom'
import {PAGE_SIZE} from "../../config";
import {reqProductPaginationList, reqProductUpdateStatus, reqProductSearchPaginationList} from '../../api'
import {connect} from "react-redux";
import {saveProductList} from "../../redux/actions/product";
import './index.less';


const {Option} = Select;

/**
 * 商品管理路由組件
 */
@connect(
    state => ({}),
    {
        saveProductList
    }
)
class Product extends Component {


    state = {
        dataSource: [], //表格列表數據（分頁）
        total: 0, //分頁顯示總條數
        current: 1, //起始頁
        searchKey: '',//搜索關鍵字
        searchType: 'productName',//搜索類型 默認為productName。 productName|productDesc
    }

    componentDidMount() {
        //調用分頁列表
        this.getProductPaginationList(1, PAGE_SIZE);
    }

    /**
     * 更新商品狀態的邏輯處理
     */
    updateProductStatus = async (id, productStatus) => {
        let dataSource = [...this.state.dataSource];
        productStatus = productStatus === 1 ? 2 : 1;
        const {status, msg} = await reqProductUpdateStatus(id, productStatus);
        if (status === 0) {
            message.success('商品更新狀態成功', 2);
            dataSource = dataSource.map(item => {
                if (item._id === id) {
                    item.status = productStatus;
                }
                return item;
            })
            this.setState({dataSource})
        } else {
            message.error(msg, 2);
        }
    }

  /**
     * 點擊頁碼時的邏輯處理
     *
     * @param {*} pagination
     */
   handleTableChange = (pagination) => {
    const {current, pageSize} = pagination;
    this.getProductPaginationList(current, pageSize);
}

/**
 * 商品分頁列表的邏輯處理
 */
getProductPaginationList = async (current, pageSize) => {
    let result;
    const {searchKey, searchType} = this.state;
    //判斷是否分頁查詢
    if (this.search) {
        result = await reqProductSearchPaginationList(current, pageSize, searchType, searchKey);
    } else {
        result = await reqProductPaginationList(current, pageSize);
    }

    const {status, msg, data} = result;

    if (status === 0) {
        const {list, total} = data;
        this.setState({
            current,
            dataSource: list,
            total,
        })
        //向redux中保存商品的數據
        this.props.saveProductList(list);
    } else {
        message.error(msg, 2);
    }
}

/**
 * 搜索相關邏輯
 */
handleSearch = async () => {
    //標識是否點擊了搜索案例
    this.search = true;
    this.getProductPaginationList(1, PAGE_SIZE);
}


render() {

    const columns = [
        {
            title: '商品名稱',
            dataIndex: 'name',
            className: 'name',
            key: 'name',
           
        },
        {
            title: '商品描述',
            dataIndex: 'desc',
            className: 'desc',
            key: 'desc',
        },
        {
            title: '價格',
            dataIndex: 'price',
            className: 'price',
            key: 'price',
            render: price => '＄' + price + '元'
        },
        {
            title: '狀態',
            className: 'status',
            render: (item) => {
                const {_id: id, status} = item;
                return (  
                    <Fragment>
                        <Button className="statusButton" style={status === 1 ? {backgroundColor:'#e95c5c'} : {backgroundColor:'#5da9c2'}} onClick={() => {
                            this.updateProductStatus(id, status)
                        }}>{status === 1 ? '下架' : '上架'}</Button>
                        <span  className="nowStatus">{status === 1 ? '在售中' : '已停售'}</span>
                    </Fragment>
                )
            },
            key: 'status'    
        },
        {
            title: '',
            key: 'operator',
            className: 'operator',
            render: (item) => {
                const {_id: id} = item;
                return (
                    <div>
                        <NavLink to={{pathname: '/admin/products/product/view', state: {id}}}>
                            <Button className="viewButton" size="small" type="dashed" icon={<ReconciliationOutlined/>}>商品詳情</Button>
                        </NavLink><br/>
                        <NavLink to={{pathname: '/admin/products/product/addUpdate', state: {id}}}>
                            <Button className="updateButton" size="small" type="dashed" icon={<FormOutlined/>}>修改資訊</Button>
                        </NavLink>
                    </div>
                )
            },
        },
    ];


    const {dataSource, total, current} = this.state;

    return (
        <Fragment>
            <Card className="card" title={
                <Fragment>
                    <Select defaultValue={"productName"} onChange={(value) => {
                        this.setState({searchType: value})
                    }}>
                        <Option value="productName">依名稱搜尋</Option>
                        <Option value="productDesc">依描述搜尋</Option>
                    </Select>
                    <Input placeholder="請輸入關鍵字～" style={{width: '25%', margin: '0 10px'}} allowClear={true}
                           onChange={e => this.setState({searchKey: e.target.value})}/>
                    <Button type="primary" className="searchButton" icon={<SearchOutlined/>} onClick={this.handleSearch}>搜索</Button>
                </Fragment>
            } extra={<NavLink to={{pathname: "/admin/products/product/addUpdate", state: {}}}>
                <Button type="primary" className="addButton" icon={<PlusCircleOutlined/>}>添加</Button>
            </NavLink>}>
                <Table bordered={true} rowKey={"_id"} dataSource={dataSource} columns={columns}
                       pagination={{
                           current,
                           pageSize: PAGE_SIZE,
                           total,
                           showQuickJumper: true,
                           position:['bottomCenter']
                       }} onChange={this.handleTableChange}/>
            </Card>

        </Fragment>
    );
}
}

export default Product
