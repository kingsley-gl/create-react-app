import React, {Component} from "react";
import {Switch, Redirect, Route} from "dva/router";
import {RouteConfigStruct} from "./RouteConfig";


interface RouteViewProps {
    children: Array<RouteConfigStruct>
}

interface RouteViewState {
}

export default class RouteView extends Component<RouteViewProps, RouteViewState> {

    render() {
        return (
            <Switch>
                {
                    this.props.children.map((item, index) => {
                        if (item.redirect) {
                            return <Redirect key={index} from={item.path} to={item.redirect}/>
                        } else {
                            console.log(<Route key={index} path={item.path}
                                               render={
                                                   (props) => {
                                                       return <item.component children={item.children} {...props} />
                                                   }
                                               }/>)
                            return <Route key={index} path={item.path}
                                          render={
                                              (props) => {
                                                  return <item.component children={item.children} {...props} />
                                              }
                                          }/>
                        }
                    })
                }
            </Switch>
        );
    }
}
