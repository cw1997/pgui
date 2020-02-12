import React, {Component} from "react";
import classnames from "classnames";
import {connect} from "react-redux";
import {AnyAction, Dispatch} from "redux";

import MyAction from "../../../../../myRedux/MyAction";
import IMyElement from "../../../../../myRedux/objects/MyElement";
import State from "../../../../../myRedux/State";
import {Controls} from "../../../../../myRedux/objects/Control";

// interface IProps {
//     children : MyElement["id"];
//     dispatch(action : AnyAction) : Dispatch;
//     selected? : boolean;
//     key? : number;
// }

class ControlItem extends Component <any, any> {
    constructor(props : any) {
        super(props);
        // this.state = {height: 'auto'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // console.info('control click');
        // this.props.dispatch(MyAction.setSelectedControl(control));
        this.props.onSelectControl(this.props.control);
    }
    render() {
        return (
            <div
                className={classnames('ControlItem', {'ControlItem-selected': this.props.selected})}
                onClick={this.handleClick}
            >
                {this.props.children}
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
        // selectedControl: state.selectedControl
    }
};

const ControlItemWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlItem);

export default ControlItemWithRedux;
