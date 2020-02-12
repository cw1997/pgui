import React, {Component} from "react";
import classnames from "classnames";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import MyAction from "../../../../../myRedux/MyAction";
import State from "../../../../../myRedux/State";
import {Controls} from "../../../../../myRedux/objects/Control";

interface IProps {
    children : Controls;
    onSelectControl(action : Controls) : void;
    selectedControl : State['selectedControl'];
}

class ControlItem extends Component <IProps, any> {
    c : Controls;
    constructor(props : any) {
        super(props);
        // this.state = {height: 'auto'};
        this.handleClick = this.handleClick.bind(this);
        this.c = this.props.children;
    }
    handleClick() {
        // console.info('control click');
        // this.props.dispatch(MyAction.setSelectedControl(control));
        this.props.onSelectControl(this.c);
    }
    render() {
        const controlName = Controls[this.c];
        const selected = (this.props.selectedControl === this.c);
        return (
            <div
                className={classnames('ControlItem', {'ControlItem-selected': selected})}
                onClick={this.handleClick}
            >
                {controlName}
            </div>
    )
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        onSelectControl: (control : Controls) => {
            dispatch(MyAction.setSelectedControl(control))
        }
    }
};

const mapStateToProps = (state : State) => {
    return {
        selectedControl: state.selectedControl
    }
};

const ControlItemWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlItem);

export default ControlItemWithRedux;
