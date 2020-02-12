import React, {Component} from "react";

import './index.sass';
import ElementItemWithRedux from "./ElementItem";
import MyElement from "myRedux/objects/MyElement";
import MyAction from "../../../../myRedux/MyAction";
import State from "../../../../myRedux/State";
import {Dispatch} from "redux";
import {connect} from "react-redux";

class ElementManager extends Component <any, any> {
    constructor(props : any) {
        super(props);
    }
    render() {
        const selectedElement = this.props.selectedElement;
        const elements = this.props.elements;
        const elementList = elements.map((element : MyElement, key : number) =>
            (selectedElement === element.id) ?
                <ElementItemWithRedux key={key} selected>{element.id}</ElementItemWithRedux> :
                <ElementItemWithRedux key={key}>{element.id}</ElementItemWithRedux>);
        return (
            <div className="ElementManager">
                {elementList}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        // onSelectElement: (element : MyElement) => {
        //     dispatch(MyAction.setSelectedElement(element))
        // }
    }
};

const mapStateToProps = (state : State) => {
    return {
        selectedElement: state.selectedElement,
        elements: state.elements,
    }
};

const ElementManagerWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ElementManager);

export default ElementManagerWithRedux;
