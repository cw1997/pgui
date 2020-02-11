import React, {Component} from "react";

import classnames from 'classnames'

import './index.sass'
import {setSelectedControl} from "redux/actions";
import {connect} from "react-redux";

export default
class ControlLibrary extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let selectedControl = this.props.selectedControl;
        let controls = [
            'Select',
            'Button',
            'Text',
            'Image',
            'Switch',
            'CheckBox',
            'Radio',
            'ProgressBar',
        ];
        const controlList = controls.map((control, key) =>
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
                {controlList}
            </div>
        )
    }
}

class ControlItem extends Component {
    constructor(props) {
        super(props);
        // this.state = {height: 'auto'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(control) {
        // console.info('control click');
        this.props.dispatch(setSelectedControl(control));
    }
    render() {
        return (
            <div
                className={classnames('ControlItem', {'ControlItem-selected': this.props.selected})}
                onClick={this.handleClick.bind(this, this.props.children)}
            >
                {this.props.children}
            </div>
        )
    }
}
const ControlItemWithRedux = connect()(ControlItem);
