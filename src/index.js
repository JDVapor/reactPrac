import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContext from "./ThemeContext"

const {Provider} = ThemeContext;
const userName = "JDVapor";

ReactDOM.render(
    <Provider value={userName}>
        <App />
    </Provider>
    , document.getElementById("root"))
