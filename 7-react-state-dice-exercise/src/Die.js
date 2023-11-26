import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        const dieIcon = `Die fas fa-dice-${this.props.face}
        ${this.props.shaking && 'shaking'}`;
        return(
                <i class={dieIcon}></i>
        )

    }
}

export default Die;