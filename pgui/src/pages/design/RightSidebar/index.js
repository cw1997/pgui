import React, {Component} from "react";

import './index.sass'
import Collapse from "components/Collapse";

export default
class RightSidebar extends Component {
    render() {
        return (
            <div className="RightSidebar">
                <Collapse title={'Appearance'}>Collapse</Collapse>
                <Collapse title={'Behavior'}>Collapse</Collapse>
            </div>
        )
    }
}
