import React, { Component } from "react";
import { render } from  "react-dom";
import HomePage from "./HomePage";
import JoinRoomPage from "./JoinRoomPage";
import CreateRoomPage from "./CreateRoomPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> {/* div serves as wrapper */}
                <HomePage></HomePage>
                <JoinRoomPage></JoinRoomPage>
                <CreateRoomPage></CreateRoomPage>
            </div>
        ); 
    }
}

const appDiv = document.getElementById("app");
render(<App name="fsw"/>, appDiv);  // render App class inside appDiv corresponding to the app div in index.html
