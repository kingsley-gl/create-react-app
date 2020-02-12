import React, { Suspense} from "react";
import {Router} from "dva/router";

import RouteView from "./routes/RouteView";
import RouteConfig from "./routes/RouteConfig";



const App = (props:any) => {
    return (
        <Router history={props.history}>
            <Suspense fallback={<div>loading...</div>}>
                <RouteView children={RouteConfig}/>
            </Suspense>
        </Router>
    );
};

export default App;
