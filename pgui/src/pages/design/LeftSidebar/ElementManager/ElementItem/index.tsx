import React, {Component} from "react";
import {connect} from "react-redux";
import {AnyAction, Dispatch} from "redux";
import classnames from "classnames";

import MyAction from "myRedux/MyAction";

import "./index.sass"
import MyElement from "../../../../../myRedux/objects/MyElement";
import State from "../../../../../myRedux/State";

export
interface IProps {
    children : MyElement["id"];
    onSelectElement : (elementId : MyElement["id"]) => any;
    selected? : boolean;
    key : number;
}

class ElementItem extends Component <IProps, any> {
    constructor(props : IProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let elementId = this.props.children;
        this.props.onSelectElement(elementId);
    }
    render() {
        return (
            <div
                className={classnames('ElementItem', {'ElementItem-selected': this.props.selected})}
        onClick={this.handleClick}
            >
            {this.props.children}
            </div>
    )
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        onSelectElement: (elementId : MyElement["id"]) => {
            return dispatch(MyAction.setSelectedElement(elementId))
        }
    }
};

const mapStateToProps = (state : State) => {
    return {
        // selectedControl: state.selectedControl
    }
};

const ElementItemWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ElementItem);
export default ElementItemWithRedux;
