import React, {Component} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import classnames from "classnames";

import MyAction from "myRedux/MyAction";

import "./index.sass"
import MyElement from "../../../../../myRedux/objects/MyElement";
import State from "../../../../../myRedux/State";
import IMyElement from "../../../../../myRedux/objects/MyElement";

export
interface IProps {
    element : MyElement;
    onSelectElement : (element : MyElement) => any;
    selectedElement : State['selectedElement'];
}

class ElementItem extends Component <IProps, any> {
    element : IMyElement;
    constructor(props : IProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.element = this.props.element;
    }
    handleClick() {
        this.props.onSelectElement(this.element);
    }
    render() {
        console.info('xxx');
        console.info('item', this.element);
        let selected : boolean = false;
        if (this.props.selectedElement) {
            selected = this.props.selectedElement.id === this.element.id;
        }
        return (
            <div
                className={classnames('ElementItem', {'ElementItem-selected': selected})}
                onClick={this.handleClick}
            >
                {this.element.id}
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
