import React, {Component} from "react";
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';

import './index.sass'

export default
function Appearance(props) {
    return (
        <div className="Appearance ms-Fabric">
            <SpinButtonItem title={'ID'}/>
            <SpinButtonItem title={'Text'}/>
            <SpinButtonItem title={'Width'}/>
            <SpinButtonItem title={'Height'}/>
            <SpinButtonItem title={'X'}/>
            <SpinButtonItem title={'Y'}/>
        </div>
    )
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
                <input id={props.title}/>
            </label>
        </ConfigItem>
    )
}
