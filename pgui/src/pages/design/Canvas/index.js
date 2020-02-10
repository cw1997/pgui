import React, {Component} from "react";

import './index.sass'
import {addElement, setSelectedControl} from "redux/actions";
import {connect} from "react-redux";

class Canvas extends Component {
    componentDidMount() {
        let that = this;
        let drag = document.querySelector('#drag');
        let dragContext = drag.getContext('2d');
        let canvas = document.querySelector('#canvas');
        let canvasContext = canvas.getContext('2d');
        // canvasContext.strokeRect(0, 0, 100, 100);
        // dragContext.scale(0.625, 0.625);
        // canvasContext.scale(0.625, 0.625);
        // console.info(drag);
        let downX, downY, upX, upY;
        let clearDragContext = function () {
            dragContext.clearRect(0, 0, drag.width, drag.height);
        };
        // drag.onmousemove = function (e) {
        //     console.info(e.offsetX, e.offsetY)
        // };
        let onmousemove = function (e) {
            // let x = e.clientX - e.offsetX;
            // let y = e.clientY - e.offsetY;
            upX = e.offsetX;
            upY = e.offsetY;
            let width = upX - downX;
            let height = upY - downY;
            // console.info(x, y, e.clientX, e.clientY, e.offsetX, e.offsetY);
            // console.info(e.offsetX, e.offsetY);
            clearDragContext();
            dragContext.strokeRect(downX, downY, width, height);
        };
        drag.onmousedown = function (e) {
            console.info(downX, downY);
            downX = e.offsetX;
            downY = e.offsetY;
            drag.onmousemove = onmousemove;
        };
        drag.onmouseup = function (e) {
            upX = e.offsetX;
            upY = e.offsetY;
            let width = upX - downX;
            let height = upY - downY;
            console.info(downX, downY, upX, upY, width, height);
            // canvasContext.fillRect(downX, downY, width, height);
            canvasContext.strokeRect(downX, downY, width, height);
            // canvasContext.stroke();
            drag.onmousemove = null;
            // add drawn control to ElementManager
            let elementName = prompt('please input element name:');
            that.props.dispatch(addElement(elementName));
        };
    }
    render() {
        return (
            <div className="Canvas">
                <div className="operate-area">
                    <div className="canvas-area">
                        <canvas id="canvas"
                                width="800px"
                                height="480px">
                            Canvas no support. Require HTML5 Browser. (canvas-layer)
                        </canvas>
                        <canvas id="drag"
                                width="800px"
                                height="480px">
                            Canvas no support. Require HTML5 Browser. (drag-layer)
                        </canvas>
                    </div>
                </div>
            </div>
        )
    }
}

const CanvasWithRedux = connect()(Canvas);
export default CanvasWithRedux;
