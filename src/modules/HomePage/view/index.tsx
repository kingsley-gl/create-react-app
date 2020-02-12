import AppLayout from "../../../layout/AppLayout";
import React, {Component} from "react";
import {connect} from "dva";

interface HomePageProps {
    children: any
}
interface HomePageState {}

export class HomePage extends Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps){
        super(props);
    }
    render() {
        return (<div>Homepage</div>);
    }
}

export default connect()(HomePage);
