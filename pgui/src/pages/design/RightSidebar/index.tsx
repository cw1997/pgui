import React, {Component} from "react";

import './index.sass'
import Collapse from "components/Collapse";
import Behavior from "pages/design/RightSidebar/Behavior";
import PropertyManagerWithRedux from "./PropertyManager";

export default
class RightSidebar extends Component <any, any> {
    render() {
        return (
            <div className="RightSidebar">
                <Collapse title={'PropertyManager'}>
                    <PropertyManagerWithRedux/>
                </Collapse>
                <Collapse title={'Behavior'}>
                    <Behavior/>
                </Collapse>
            </div>
        )
    }
}