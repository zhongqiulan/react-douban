import React from 'react';
import './home.less'
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuItem } from 'rc-menu';

const { Header, Content, Footer } = Layout;
const { Item } = Breadcrumb
export default class HomeComponent extends React.Component {
    render() {
        return <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    className="menu"
                >
                    <MenuItem key="1">首页</MenuItem>
                    <MenuItem key="2">电影</MenuItem>
                    <MenuItem key="3">关于</MenuItem>
                </Menu>
            </Header>
            <Content style={{ padding: '0 20px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Item>Home</Item>
                    <Item>List</Item>
                    <Item>App</Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
            </Content>
            <Footer className="footer">React Douban ©2019 Created by zhongqiulan</Footer>
        </Layout>
    }
}

