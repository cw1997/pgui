import React, {Component} from "react";

import './index.sass'

export default
function Behavior(props : any) {
    return (
        <div className="Behavior ms-Fabric">
            <ConfigItem label={'Behavior'}>
                <select>
                    <option value={'exec'}>Execute Code</option>
                </select>
            </ConfigItem>
        </div>
    )
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