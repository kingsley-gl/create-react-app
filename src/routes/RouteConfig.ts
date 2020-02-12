import React from "react";

export interface RouteConfigStruct{
    path?: string,
    redirect?: string,
    component?: any,
    children?: Array<RouteConfigStruct>,
}


const ReactConfig : Array<RouteConfigStruct> = [
    // dashboard
    {
        path:"/home",
        component: React.lazy(()=>import("../modules/HomePage/view")),
        children: []
    },
    //login
    {
        path: "/login",
        component: React.lazy(()=>import("../modules/Login/view"))
    },
    //register
    // {
    //     path: "/register"
    // }
];

export default ReactConfig;
