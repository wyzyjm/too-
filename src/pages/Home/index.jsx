import React, { Component } from "react"
import { Redirect } from "react-router-dom"

import { Layout } from "antd"
import LeftNav from "../../components/leftnav"
import Head from "../../components/header"

const { Header, Footer, Sider, Content } = Layout

export default class Home extends Component {
    render() {
        console.log("接收到的用户信息", this.props.location.state)
        const { username, password, remember } = this.props.location.state

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
                        <div>
                            <ul>
                                <li>用户:{username}</li>
                                <li>密码:{password}</li>
                                <li>是否阅读协议:{remember ? "是" : "否"}</li>
                            </ul>
                        </div>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}
