import React, { Component } from "react"
import { Button, Form, Icon, Input, Checkbox, message } from "antd"
import { NavLink } from "react-router-dom"
import "./index.css"

import { login } from "../../api/login"
class LoginForm extends Component {
    handleSubmit = e => {
        const { form, history } = this.props
        e.preventDefault() // 阻止默认事件
        // const values = form.getFieldsValue() // 获取表单item 值,对象
        // console.log("itemList", values)
        // 表单验证
        form.validateFields(async (err, values) => {
            if (err) return
            // 发送请求
            // const data = values
            // const res = await login(data)
            // if (res.status === 1) message.error(res.msg) // 登录失败
            // message.success(res.msg) // 登录成功
            // 本应发送请求, 获取token,跳转页面
            const { username, password, remember } = values
            history.push("/home", { username, password, remember })
        })
    }

    render() {
        // 判断用户是否已经登录，登录自动跳到home页 Redirect to="/home"

        const { getFieldDecorator } = this.props.form

        return (
            <div className="login">
                <div className="login-body">
                    <h2 className="login-title">登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator("username", {
                                rules: [
                                    { required: true, whitespace: true, message: "请输入用户名" },
                                    { min: 4, message: "用户名至少4位" },
                                    { max: 12, message: "用户名最多12位" },
                                    { pattern: /^[a-zA-Z_0-9]{1,12}/, message: "请输入合法用户名" }
                                ]
                            })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator("password", {
                                rules: [{ required: true, message: "Please input your Password!" }]
                            })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator("remember", {
                                valuePropName: "checked",
                                initialValue: true // 默认勾选
                            })(<Checkbox>Remember me</Checkbox>)}
                            <NavLink className="login-form-forgot" to="/forgot">
                                Forgot password
                            </NavLink>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            <NavLink to="/register">register now!</NavLink>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const Login = Form.create({ name: "normal_login" })(LoginForm)

export default Login
