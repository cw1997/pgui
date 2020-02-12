import React, {Component} from "react";
import classnames from 'classnames'

import './index.sass'
import ControlItemWithRedux from "./ControlItem";
import MyAction from "../../../../myRedux/MyAction";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import State from "../../../../myRedux/State";
import {Controls} from "../../../../myRedux/objects/Control";


class ControlLibrary extends Component <any, any> {
    constructor(props : any) {
        super(props);
    }
    render() {
        const selectedControl = this.props.selectedControl;
        const controlListJsx = this.props.controls.map((control : Controls, key : number) =>
            (selectedControl === control) ?
                <ControlItemWithRedux key={key} selected>{control}</ControlItemWithRedux> :
                <ControlItemWithRedux key={key}>{control}</ControlItemWithRedux>);
        // {
        //     if (selectedControl === control) {
        //         <ControlItem selected>{control}</ControlItem>
        //     } else {
        //         <ControlItem>{control}</ControlItem>
        //     }
        // });
        return (
            <div className="ControlLibrary">
                {controlListJsx}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        // onSelectControl: (control : any) => {
        //     dispatch(MyAction.setSelectedControl(control))
        // }
    }
};

const mapStateToProps = (state : State) => {
    return {
        selectedControl: state.selectedControl,
        controls: state.controls,
    }
};

const ControlLibraryWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlLibrary);

export default ControlLibraryWithRedux;
