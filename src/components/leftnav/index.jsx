import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import { Menu, Icon } from "antd"

import logo from "@/assets/images/logo.svg"
import "./index.css"
import menuList from "../../config/menuConfig"
const { SubMenu } = Menu
class LeftNav extends Component {
    getMenuNodes = menuList => {
        const path = this.props.location.pathname
        console.log(path)
        return menuList.map(item => {
            if (item.children && item.children.length > 0) {
                item.children.find(v => v.path === path) && (this.openKey = item.path)
                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        })
    }

    componentWillMount() {
        this.menumNodes = this.getMenuNodes(menuList)
    }
    render() {
        // debugger
        const { pathname } = this.props.location
        let openkey = this.openKey

        return (
            <div style={{ color: "#fff" }}>
                <div className="sidebar-logo-container">
                    <img src={logo} className="sidebar-logo" alt="logo" />
                    <h1 className="sidebar-title">管理后台</h1>
                </div>
                {/* 菜单 */}
                <Menu mode="inline" theme="dark" selectedKeys={[pathname]} defaultOpenKeys={[openkey]}>
                    {this.menumNodes}
                </Menu>
            </div>
        )
    }
}

export default withRouter(LeftNav)
