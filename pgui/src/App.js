import React from 'react';
import './App.sass';
import LeftSidebar from "pages/design/LeftSidebar";
import Canvas from "pages/design/Canvas";
import RightSidebar from "pages/design/RightSidebar";
import {compose, createStore} from "redux";
import pGui from "redux/reduces";
import {Provider} from "react-redux";

// add redux-devtools by cw1997 2020-02-10 15:54:28
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function App() {
    // let store = createStore(pGui);
    const store = createStore(pGui, /* preloadedState, */ composeEnhancers());
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
