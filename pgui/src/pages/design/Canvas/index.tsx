import React, {Component} from "react";

import './index.sass'
import MyAction from "myRedux/MyAction";
import {connect} from "react-redux";
import MyElement from "../../../myRedux/objects/MyElement";

class Canvas extends Component <any, any> {
    componentDidMount() {
        // let that = this;
        // let drag : HTMLCanvasElement | null = document.querySelector('#drag');
        // let canvas : HTMLCanvasElement | null = document.querySelector('#canvas');
        // if (drag && canvas) {
        //     let dragContext : CanvasRenderingContext2D | null = drag.getContext('2d');
        //     let canvasContext : CanvasRenderingContext2D | null = canvas.getContext('2d');
        //     if (dragContext && canvasContext) {
        //         // canvasContext.strokeRect(0, 0, 100, 100);
        //         // dragContext.scale(0.625, 0.625);
        //         // canvasContext.scale(0.625, 0.625);
        //         // console.info(drag);
        //         // let ctx : CanvasRenderingContext2D = dragContext;
        //         let downX : number, downY : number, upX : number, upY : number;
        //         let clearDragContext = function () {
        //             dragContext.clearRect(0, 0, drag.width, drag.height);
        //         };
        //         // drag.onmousemove = function (e) {
        //         //     console.info(e.offsetX, e.offsetY)
        //         // };
        //         let onmousemove = function (e) {
        //             // let x = e.clientX - e.offsetX;
        //             // let y = e.clientY - e.offsetY;
        //             upX = e.offsetX;
        //             upY = e.offsetY;
        //             let width = upX - downX;
        //             let height = upY - downY;
        //             // console.info(x, y, e.clientX, e.clientY, e.offsetX, e.offsetY);
        //             // console.info(e.offsetX, e.offsetY);
        //             clearDragContext();
        //             dragContext.strokeRect(downX, downY, width, height);
        //         };
        //         drag.onmousedown = function (e) {
        //             console.info(downX, downY);
        //             downX = e.offsetX;
        //             downY = e.offsetY;
        //             drag.onmousemove = onmousemove;
        //         };
        //         drag.onmouseup = function (e) {
        //             upX = e.offsetX;
        //             upY = e.offsetY;
        //             let width = upX - downX;
        //             let height = upY - downY;
        //             console.info(downX, downY, upX, upY, width, height);
        //             // canvasContext.fillRect(downX, downY, width, height);
        //             canvasContext.strokeRect(downX, downY, width, height);
        //             // canvasContext.stroke();
        //             drag.onmousemove = null;
        //             // add drawn control to ElementManager
        //             let elementName : string = prompt('please input element name:');
        //             let element : MyElement = {
        //                 id: elementName,
        //                 text: '',
        //                 appearance: {
        //                     width,
        //                     height,
        //                     x: downX,
        //                     y: downY,
        //                 }
        //             };
        //             that.props.dispatch(MyAction.addElement(element));
        //         }
        //     }
        // }
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
