import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import { Layout } from "antd"
import LeftNav from "../../components/leftnav"
import Head from "../../components/header"

import Home from "../Home"
import List from "../Product/list"
import Detail from "../Product/detail"
import Category from "../Product/category"

import User from "../User/user"
import Role from "../User/role"
import Line from "../Charts/line"
import Pie from "../Charts/pie"
import Bar from "../Charts/bar"
const { Header, Footer, Sider, Content } = Layout

export default class Admin extends Component {
    render() {
        const token = true // 去一个地方拿登录标识
        if (!token) return <Redirect to="/login" /> // 没有登录就跳登录
        // 有就渲染页面
        return (
            <Layout style={{ height: "100%" }}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header>
                        <Head />
                    </Header>
                    <Content>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/list" component={List} />
                            <Route path="/detail" component={Detail} />
                            <Route path="/category" component={Category} />
                            <Route path="/userlist" component={User} />
                            <Route path="/role" component={Role} />
                            <Route path="/chart/line" component={Line} />
                            <Route path="/chart/pie" component={Pie} />
                            <Route path="/chart/bar" component={Bar} />
                            <Redirect to="/home" />
                        </Switch>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}
