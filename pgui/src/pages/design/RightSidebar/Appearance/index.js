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
            <SpinButton
                defaultValue="0"
                label={props.title + ' :'}
                min={0}
                max={800}
                step={10}
                // iconProps={{ iconName: 'IncreaseIndentLegacy' }}
                // tslint:disable:jsx-no-lambda
                onFocus={() => console.log('onFocus called')}
                onBlur={() => console.log('onBlur called')}
                incrementButtonAriaLabel={'Increase value by 1'}
                decrementButtonAriaLabel={'Decrease value by 1'}
            />
        </ConfigItem>
    )
}
