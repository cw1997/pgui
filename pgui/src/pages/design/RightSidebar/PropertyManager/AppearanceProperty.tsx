import React, {Component} from "react";
import MyInputWithRedux from "./MyInput";

export default
class AppearanceProperty extends Component<any, any> {
    render() {
        return (
            <div className="AppearanceProperty">
                <MyInputWithRedux nameKey={'appearance.x'} title={'X'}/>
                <MyInputWithRedux nameKey={'appearance.y'} title={'Y'}/>
                <MyInputWithRedux nameKey={'appearance.width'} title={'Width'}/>
                <MyInputWithRedux nameKey={'appearance.height'} title={'Height'}/>
            </div>
        )
    }
}