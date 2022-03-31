import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from "./pages/Login"
import Forget from "./pages/Forget"
import Register from "./pages/Register"
import Admin from "./pages/Admin"
export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/forgot" component={Forget} />
                    <Route path="/register" component={Register} />
                    <Route path="/" component={Admin} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}
