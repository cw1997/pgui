import React from 'react';
import './App.sass';
import LeftSidebar from "pages/design/LeftSidebar";
import Canvas from "pages/design/Canvas";
import RightSidebar from "pages/design/RightSidebar";
import {createStore} from "redux";
import pGui from "redux/reduces";
import {Provider} from "react-redux";

function App() {
    let store = createStore(pGui);
    return (
        <Provider store={store}>
            <div className="App">
                <div className="design-area">
                    <div className="left-sidebar">
                        <LeftSidebar/>
                    </div>
                    <div className="canvas-area">
                        <Canvas/>
                    </div>
                    <div className="right-sidebar">
                        <RightSidebar/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
