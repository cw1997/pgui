import React, {Component} from "react";

import './index.sass'
import Collapse from "components/Collapse";

export default
class LeftSidebar extends Component {
    render() {
        return (
            <div className="LeftSidebar">
                <Collapse title={'Canvas Manager'}>Collapse</Collapse>
                <Collapse title={'Control Library'}>Collapse</Collapse>
                <Collapse title={'Element Manager'}>Collapse</Collapse>
            </div>
        )
    }
}
