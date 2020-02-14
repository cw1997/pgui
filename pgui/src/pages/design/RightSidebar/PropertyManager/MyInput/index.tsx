import React, {Component} from "react";
import IMyElement from "../../../../../myRedux/objects/MyElement";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import State from "../../../../../myRedux/State";
import MyAction from "../../../../../myRedux/MyAction";

// export
// interface IProps {
//     element : IMyElement;
//     readonly nameKey : string;
//     readonly key : number;
//     readonly title : string;
//     onUpdateElement : (element : IMyElement) => any;
// }

class MyInput extends Component<any, any> {
    element : any;
    constructor(props : any) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        if (this.props.element) {
            this.element = {...this.props.element};
            console.info('handleUpdate raw id', this.props.element);
            console.info('handleUpdate id', this.element);
        }
    }
    handleUpdate (event : any) {
        if (this.element) {
            // Reflect.set(this.element, this.props.nameKey, this.value);
            this.element[this.props.nameKey] = event.target.value;
            this.props.onUpdateElement(this.element);
        }
        // this.props.selectedElement[this.props.nameKey] = this.value;
    }
    render() {
        return (
            <div className="MyInput">
                <label htmlFor={this.props.title}>
                    {this.props.element['id']} - {this.props.title}
                    <input
                        readOnly={this.props.readOnly}
                        id={this.props.title}
                        value={this.props.element[this.props.nameKey]}
                        onChange={this.handleUpdate}
                    />
                </label>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        onUpdateElement: (element : IMyElement) => {
            return dispatch(MyAction.updateElement(element))
        }
    }
};

const mapStateToProps = (state : State) => {
    return {
        element: state.selectedElement
    }
};

const MyInputWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyInput);

export default MyInputWithRedux;
