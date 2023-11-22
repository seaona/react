import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <Die num={1}/>
                <Die num={4}/>
                <button>Roll me</button>
            </div>
        )

    }
}

export default RollDice;