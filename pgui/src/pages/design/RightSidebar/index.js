import React, {Component} from "react";

import './index.sass'
import Collapse from "components/Collapse";
import Appearance from "pages/design/RightSidebar/Appearance";
import Behavior from "pages/design/RightSidebar/Behavior";

export default
class RightSidebar extends Component {
    render() {
        return (
            <div className="RightSidebar">
                <Collapse title={'Appearance'}>
                    <Appearance/>
                </Collapse>
                <Collapse title={'Behavior'}>
                    <Behavior/>
                </Collapse>
            </div>
        )
    }
}