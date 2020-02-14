import React, {Component} from "react";

import './index.sass';
import ElementItemWithRedux from "./ElementItem";
import IMyElement from "myRedux/objects/MyElement";
import State from "../../../../myRedux/State";
import {Dispatch} from "redux";
import {connect} from "react-redux";

class ElementManager extends Component <any, any> {
    // constructor(props : any) {
    //     super(props);
    // }
    render() {
        // const elements : IMyElement[] = this.props.elements;
        const elementList = this.props.elements.map( (element : IMyElement, key : number) =>
            <ElementItemWithRedux key={key} element={element} />
        );
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
        // selectedElement: state.selectedElement,
        elements: state.elements,
    }
};

const ElementManagerWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ElementManager);

export default ElementManagerWithRedux;
