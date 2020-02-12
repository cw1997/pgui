import React, {Component} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import classnames from "classnames";

import MyAction from "myRedux/MyAction";

import "./index.sass"
import MyElement from "../../../../../myRedux/objects/MyElement";
import State from "../../../../../myRedux/State";

// export
// interface IProps {
//     children : MyElement["id"];
//     onSelectElement : (elementId : MyElement["id"]) => any;
//     selected? : boolean;
//     key : number;
// }

class ElementItem extends Component <any, any> {
    constructor(props : any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let element = this.props.element;
        this.props.onSelectElement(element);
    }
    render() {
        return (
            <div
                className={classnames('ElementItem', {'ElementItem-selected': this.props.selectedElement})}
        onClick={this.handleClick}
            >
            {this.props.children}
            </div>
    )
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        onSelectElement: (element : MyElement) => {
            return dispatch(MyAction.setSelectedElement(element))
        }
    }
};

const mapStateToProps = (state : State) => {
    return {
        selectedElement: state.selectedElement
    }
};

const ElementItemWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ElementItem);

export default ElementItemWithRedux;
