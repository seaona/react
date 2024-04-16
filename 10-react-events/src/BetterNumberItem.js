import React, { Component } from 'react';

class BetterNumberItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    // an event object is passed automatically from the parent props
    handleRemove(e) {
        this.props.remove(this.props.value)
    }

    render() {
        return (
            <li>
                {this.props.value}
                <button onClick={this.handleRemove}>X</button>
            </li>
        );
    }
}

export default BetterNumberItem;