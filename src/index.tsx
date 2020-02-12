import dva from "dva";
import './index.css';
import App from "./App";


const createHistory=require("history").createHashHistory()

const app = dva({history: createHistory});

app.router(App);

app.start('#root')

