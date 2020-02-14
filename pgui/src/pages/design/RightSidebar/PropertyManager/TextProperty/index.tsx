import React, {Component} from "react";

// import './index.sass'
import PropertyPanel from "../PropertyPanel";
import BasicProperty from "../BasicProperty";
import {Dispatch} from "redux";
import IMyElement from "../../../../../myRedux/objects/MyElement";
import MyAction from "../../../../../myRedux/MyAction";
import State from "../../../../../myRedux/State";
import {connect} from "react-redux";

class TextProperty extends Component<any> {
    // element : IMyElement;
    // constructor(props : any) {
    //     super(props);
    //     this.handleUpdate = this.handleUpdate.bind(this);
    //     if (this.props.element) {
    //         this.element = {...this.props.element};
    //     }
    // }
    // handleUpdate () {
    //     if (this.element) {
    //         // Reflect.set(this.element, this.props.nameKey, this.value);
    //         this.props.onUpdateElement(this.element);
    //     }
    //     // this.props.selectedElement[this.props.nameKey] = this.value;
    // }
    render() {
        return (
            <div className="TextProperty">
                <PropertyPanel>
                    <BasicProperty/>
                    {/*<hr/>*/}
                    {/*<Appearance/>*/}
                    {/*<hr/>*/}
                </PropertyPanel>
                {/*<label htmlFor="id">*/}
                {/*    ID :*/}
                {/*    <input id="id" value={this.element.id} onChange={this.handleUpdate}/>*/}
                {/*</label>*/}
                {/*<label htmlFor="remark">*/}
                {/*    Remark :*/}
                {/*    <input id="remark" value={this.element.remark} onChange={this.handleUpdate}/>*/}
                {/*</label>*/}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        // onUpdateElement: (element : IMyElement) => {
        //     return dispatch(MyAction.updateElement(element))
        // }
    }
};

const mapStateToProps = (state : State) => {
    return {
        // element: state.selectedElement
    }
};

const TextPropertyWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextProperty);

export default TextPropertyWithRedux;
