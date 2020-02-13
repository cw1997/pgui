import React, {Component} from "react";
import IMyElement from "../../../../../myRedux/objects/MyElement";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import State from "../../../../../myRedux/State";
import MyAction from "../../../../../myRedux/MyAction";

// export
// interface IProps {
//     element : IMyElement;
//     readonly key : string;
//     readonly title : string;
//     onUpdateElement : (element : IMyElement) => any;
// }

class MyInput extends Component<any, any> {
    element : IMyElement;
    nameKey : string;
    value : any;
    constructor(props : any) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.element = this.props.element;
        this.nameKey = this.props.nameKey;
        this.value = Reflect.get(this.element, this.nameKey);
        // let element : IMyElement = this.element;
    }
    handleUpdate () {
        Reflect.set(this.element, this.nameKey, this.value);
        this.props.onUpdateElement(this.element);
    }
    render() {
        return (
            <div className="MyInput">
                <label htmlFor={this.props.title}>
                    {this.props.title}
                    <input id={this.props.title} value={this.value} onChange={this.handleUpdate} />
                </label>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        onUpdateElement: (element : IMyElement) => {
            return dispatch(MyAction.updateElement(element))
        }
    }
};

const mapStateToProps = (state : State) => {
    return {
        element: state.selectedElement
    }
};

const MyInputWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyInput);

export default MyInputWithRedux;
