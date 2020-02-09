import React, {Component} from "react";

import './index.sass'

export default class Collapse extends Component {
    constructor(props) {
        super(props);
        this.state = {height: 'auto'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.info(this.state.height);
        if (this.state.height === 'auto') {
            this.setState({height: '0'});
        } else {
            this.setState({height: 'auto'})
        }
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="Collapse">
                <div className="collapse-title" onClick={this.handleClick}>
                    {this.props.title}
                </div>
                <div className="collapse-content" style={{'height': this.state.height}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
