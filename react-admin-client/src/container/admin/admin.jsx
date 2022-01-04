import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';
// import LeftNav from "./LeftNav";
// import Header from "./Header";
import Home from "../../components/Home";
// import Category from "../Category";
// import Product from "../Product";
// import ProductAddUpdate from '../Product/AddUpdate'
// import ProductView from '../Product/View'
// import User from "../User";
// import Role from "../Role";
// import ChartsBar from '../Charts/Bar'
// import ChartsLine from "../Charts/Line";
// import ChartsPie from "../Charts/Pie";
import {connect} from "react-redux";
// import './index.less'

const {Footer, Sider, Content} = Layout;

/**
 * 后台管理主路由组件
 */
// @connect(
//     state => ({userInfo: state.login}),
// )
class Admin extends Component {

    // componentDidMount(){
    //     console.log(this.props.userInfo.user.username)
    // }

    render() {
        const {isLogin} = this.props.userInfo;
        if (!isLogin) {
            //如果没有登录，跳转到登录页面
            return <Redirect to="/login"/>
            // this.props.history.replace("/login");
        }else{
        return (
            <Layout>
                <Sider>
                    {/* <LeftNav/> */}
                </Sider>
                <Layout>
                    {/* <Header/> */}
                    <Content style={{margin: '20px', backgroundColor: '#fff'}}>
                        <Switch>
                            {/* { <Route path="/admin" component={Admin}/> } */}

                             <Route path="/admin/home" component={Home}/>
                            {/* <Route path="/admin/products/category" component={Category}/>
                            <Route path="/admin/products/product" exact={true} component={Product}/>
                            <Route path="/admin/products/product/addUpdate" component={ProductAddUpdate}/>
                            <Route path="/admin/products/product/view" component={ProductView}/>  */}
                            {/* <Route path="/admin/user" component={User}/> */}
                            {/* <Route path="/admin/role" component={Role}/>
                            <Route path="/admin/charts/bar" component={ChartsBar}/>
                            <Route path="/admin/charts/line" component={ChartsLine}/>
                            <Route path="/admin/charts/pie" component={ChartsPie}/> */}
                            <Redirect to="/admin/home"/>
                            {/* <Redirect to="/admin"/> */}
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#1DA57A', fontWeight: 'bold'}}>
                        推荐使用Chrome浏览器，可以获得更佳页面操作体验
                
                    </Footer>
                </Layout>
            </Layout>
        );
        }
    }
}

// export default Admin

export default connect(
    state => ({userInfo: state.login}),
    {
        
    }
)(Admin)