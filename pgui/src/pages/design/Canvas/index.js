import React, {Component} from "react";

import './index.sass'
import Collapse from "components/Collapse";

export default
class Canvas extends Component {
    render() {
        return (
            <div className="Canvas">
                <div className="operate-area">
                    <div className="canvas-area">
                        <canvas id="canvas">
                            Canvas no support. Require HTML5 Browser. (canvas-layer)
                        </canvas>
                        <canvas id="drag">
                            Canvas no support. Require HTML5 Browser. (drag-layer)
                        </canvas>
                    </div>
                </div>
            </div>
        )
    }
}
