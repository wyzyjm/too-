import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from "./pages/Login"
import Forget from "./pages/Forget"
import Register from "./pages/Register"
import Home from "./pages/Home"
export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/forgot" component={Forget} />
                    <Route path="/register" component={Register} />
                    <Route path="/home" component={Home} />
                    <Redirect to="/login" />
                </Switch>
            </Router>
        )
    }
}
