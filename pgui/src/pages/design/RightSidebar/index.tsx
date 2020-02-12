import React, {Component} from "react";

import './index.sass'
import Collapse from "components/Collapse";
import Appearance from "pages/design/RightSidebar/Appearance";
import Behavior from "pages/design/RightSidebar/Behavior";
import AppearanceWithRedux from "pages/design/RightSidebar/Appearance";

export default
class RightSidebar extends Component <any, any> {
    render() {
        return (
            <div className="RightSidebar">
                <Collapse title={'Appearance'}>
                    <AppearanceWithRedux/>
                </Collapse>
                <Collapse title={'Behavior'}>
                    <Behavior/>
                </Collapse>
            </div>
        )
    }
}