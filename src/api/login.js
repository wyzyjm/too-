// import { message } from "antd"
import ajax from "../utils/request"

export const login = paramas => ajax("/login", "GET", paramas) // 登录

/**
    const data = { username: "小明", password: 1231 }
    const res = await login(data)
    if (res.status === 1) message.error(res.msg) // 登录失败
    message.success(res.msg) // 登录成功
    this.props.history.replace("/login") // 跳转页面
 */
