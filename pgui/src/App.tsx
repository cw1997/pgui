import React from 'react';
// my file
import 'App.sass';
import LeftSidebar from "pages/design/LeftSidebar";
import CanvasWithRedux from "pages/design/Canvas";
import RightSidebar from "pages/design/RightSidebar";
// react-redux
import Reduce from "myRedux/Reduce";
import {createStore} from "redux";
import {Provider} from "react-redux";
// react-router
import {BrowserRouter, Switch, Route} from "react-router-dom";

// add redux-devtools by cw1997 2020-02-10 15:54:28
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore<any, any, any, any>(
    Reduce.pGui,
    composeWithDevTools()
);

const App = () => {
    // let store = createStore(pGui);
    // const store = createStore(Reduce.pGui, /* preloadedState, */ composeEnhancers());
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'}>
                            <div className="design-area">
                                <div className="left-sidebar">
                                    <LeftSidebar/>
                                </div>
                                <div className="canvas-area">
                                    <CanvasWithRedux/>
                                </div>
                                <div className="right-sidebar">
                                    <RightSidebar/>
                                </div>
                            </div>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    );
};

export default App;
