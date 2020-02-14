import React, {Component} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import classnames from "classnames";

import MyAction from "myRedux/MyAction";

import "./index.sass"
import State from "../../../../../myRedux/State";
import IMyElement from "../../../../../myRedux/objects/MyElement";

export
interface IProps {
    element : IMyElement;
    onSelectElement : (element : IMyElement) => any;
    selectedElement : State['selectedElement'];
}

class ElementItem extends Component <IProps, any> {
    constructor(props : IProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onSelectElement(this.props.element);
    }
    render() {
        let selected : boolean = false;
        if (this.props.selectedElement) {
            selected = this.props.selectedElement.id === this.props.element.id;
        }
        return (
            <div
                className={classnames('ElementItem', {'ElementItem-selected': selected})}
                onClick={this.handleClick}
            >
                {this.props.element.id} - {this.props.element.name}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        onSelectElement: (element : IMyElement) => {
            return dispatch(MyAction.setSelectedElement(element))
        }
    }
};

const mapStateToProps = (state : State) => {
    return {
        selectedElement: state.selectedElement,
        // elements: state.elements,
    }
};

const ElementItemWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ElementItem);

export default ElementItemWithRedux;
