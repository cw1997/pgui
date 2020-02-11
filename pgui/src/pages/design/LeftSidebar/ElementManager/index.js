import React, {Component} from "react";

import classnames from 'classnames'

import './index.sass'
import {} from "redux/actions";
import {connect} from "react-redux";
import {setSelectedElement} from "redux/actions";

export default
class ElementManager extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let selectedElement = this.props.selectedElement;
        let elements = this.props.elements;
        const elementList = elements.map((element, key) =>
            (selectedElement === element.id) ?
                <ElementItemWithRedux key={key} selected>{element.id}</ElementItemWithRedux> :
                <ElementItemWithRedux key={key}>{element.id}</ElementItemWithRedux>);
        return (
            <div className="ElementManager">
                {elementList}
            </div>
        )
    }
}

class ElementItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(elementId) {
        this.props.dispatch(setSelectedElement(elementId));
    }
    render() {
        return (
            <div
                className={classnames('ElementItem', {'ElementItem-selected': this.props.selected})}
                onClick={this.handleClick.bind(this, this.props.children)}
            >
                {this.props.children}
            </div>
        )
    }
}
const ElementItemWithRedux = connect()(ElementItem);
