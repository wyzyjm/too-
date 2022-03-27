import React, { Component } from "react"
import logo from "@/assets/images/logo.svg"
import "./index.css"
export default class LeftNav extends Component {
    render() {
        return (
            <div style={{ color: "#fff" }}>
                <div className="sidebar-logo-container">
                    <img src={logo} className="sidebar-logo" alt="logo" />
                    <h1 className="sidebar-title">管理后台</h1>
                </div>
                nav
            </div>
        )
    }
}
