import React, {Component} from "react";

import './index.sass'

export default
function Appearance(props) {
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

function ConfigItem(props) {
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

function SpinButtonItem(props) {
    return (
        <ConfigItem title={props.title}>
            <label htmlFor={props.title}>
                {props.title}
                <input id={props.title} value={props.value}/>
            </label>
        </ConfigItem>
    )
}


