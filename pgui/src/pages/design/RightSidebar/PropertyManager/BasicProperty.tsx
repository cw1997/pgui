import React, {Component} from "react";
import MyInputWithRedux from "./MyInput";

export default
class BasicProperty extends Component<any, any> {
    render() {
        return (
            <div className="BasicProperty">
                <MyInputWithRedux nameKey={'id'} title={'ID'} />
                <MyInputWithRedux nameKey={'remark'} title={'Remark'} />
            </div>
        )
    }
}
