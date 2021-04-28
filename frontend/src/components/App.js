import React, { Component } from "react";
import { render } from  "react-dom";
import HomePage from "./HomePage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HomePage></HomePage>
        ); 
    }
}

const appDiv = document.getElementById("app");
render(<App name="fsw"/>, appDiv);  // render App class inside appDiv corresponding to the app div in index.html
