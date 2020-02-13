import React, {Component} from "react";

import './index.sass'
import {Dispatch} from "redux";
import IMyElement from "../../../../myRedux/objects/MyElement";
import MyAction from "../../../../myRedux/MyAction";
import State from "../../../../myRedux/State";
import {connect} from "react-redux";
import {Controls} from "../../../../myRedux/objects/Control";
import TextProperty from "./TextProperty";

class PropertyManager extends Component<any, any> {
    controlType : Controls;
    constructor(props : any) {
        super(props);
    }
    render() {
        let children;
        if (this.props.selectedElement) {
            this.controlType = this.props.selectedElement.type;
            switch (this.controlType) {
                case Controls.text:
                    children = (<TextProperty/>);
                    break;
                case Controls.button:
                    children = (<TextProperty/>);
                    break;
                default:
                    children = (<TextProperty/>);
                    break;
            }
        }
        return (
            <div className="PropertyManager">
                {children}
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
        selectedElement: state.selectedElement
    }
};

const PropertyManagerWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyManager);

export default PropertyManagerWithRedux;
