import React, {Component} from "react";

import './index.sass'
import {connect} from "react-redux";
import State from "../../../../myRedux/State";
import {Dispatch} from "redux";

function Appearance(props : any) {
    if (props.appearance) {
        return (
            <div className="Appearance">
                <SpinButtonItem title={'ID'}>{props.id}</SpinButtonItem>
                <SpinButtonItem title={'Text'}>{props.text}</SpinButtonItem>
                <SpinButtonItem title={'Width'}>{props.appearance.width}</SpinButtonItem>
                <SpinButtonItem title={'Height'}>{props.appearance.height}</SpinButtonItem>
                <SpinButtonItem title={'X'}>{props.appearance.x}</SpinButtonItem>
                <SpinButtonItem title={'Y'}>{props.appearance.y}</SpinButtonItem>
            </div>
        )
    } else {
        return (
            <div className="Appearance">
                Not select anyone element.
            </div>
        )
    }

}

function ConfigItem(props : any) {
    return (
        <div className="ConfigItem">
            <div className="config-item-label">
                {props.label}
            </div>
            <div className="config-item-input">
                {props.children}
            </div>
        </div>
    )
}

function SpinButtonItem(props : any) {
    return (
        <ConfigItem title={props.title}>
            <label htmlFor={props.title}>
                {props.title}
                <input id={props.title} value={props.value}/>
            </label>
        </ConfigItem>
    )
}


const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        // onSelectControl: (control : any) => {
        //     dispatch(setSelectedControl(control))
        // }
    }
};

const mapStateToProps = (state : State) => {
    return {
        id: null,
        text: null,
        appearance: null,
    }
    // if (state.selectedControl && state.elements[state.selectedControl]) {
    //     return {
    //         id: state.elements[state.selectedControl].id,
    //         text: state.elements[state.selectedControl].text,
    //         appearance: state.elements[state.selectedControl].appearance,
    //     }
    // } else {
    //     return {
    //         id: null,
    //         text: null,
    //         appearance: null,
    //     }
    // }
};

const AppearanceWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Appearance);

export default AppearanceWithRedux;
