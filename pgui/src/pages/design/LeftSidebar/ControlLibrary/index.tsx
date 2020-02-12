import React, {Component} from "react";

import './index.sass'
import ControlItemWithRedux from "./ControlItem";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import State from "../../../../myRedux/State";
import {Controls} from "../../../../myRedux/objects/Control";


class ControlLibrary extends Component <any, any> {
    // constructor(props : any) {
    //     super(props);
    // }
    render() {
        const controlListJsx = this.props.controls.map(
            (control : Controls, key : number) =>
                <ControlItemWithRedux key={key}>{control}</ControlItemWithRedux>
        );
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
        controls: state.controls,
    }
};

const ControlLibraryWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlLibrary);

export default ControlLibraryWithRedux;
