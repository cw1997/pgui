import React, {Component} from "react";

import './index.sass'
import Collapse from "components/Collapse";
import ControlLibraryWithRedux from "pages/design/LeftSidebar/ControlLibrary/redux";
import ElementManagerWithRedux from "pages/design/LeftSidebar/ElementManager/redux";

export default
class LeftSidebar extends Component {
    render() {
        return (
            <div className="LeftSidebar">
                <Collapse title={'Canvas Manager'}>Collapse</Collapse>
                <Collapse title={'Control Library'}>
                    <ControlLibraryWithRedux/>
                </Collapse>
                <Collapse title={'Element Manager'}>
                    <ElementManagerWithRedux/>
                </Collapse>
            </div>
        )
    }
}
