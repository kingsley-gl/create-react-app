import AppLayout from "../../../layout/AppLayout";
import React, {Component} from "react";
import {connect} from "dva";

interface LoginProps {
    children: any
}
interface LoginState {}

export class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps){
        super(props);
    }
    render() {
        return (<div>login</div>);
    }
}

export default connect()(Login);
