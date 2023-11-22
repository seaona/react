import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }

        this.getRandom = this.getRandom.bind(this);
    }

    getRandom() {
        const random = Math.floor(Math.random() * 10) + 1;
        this.setState({
            num: random
        })
    }

    render() {
        return(
            <div>
                <h1>Number is {this.state.num}</h1>
                { this.state.num === 7
                    ? <h2>YOU WIN</h2>
                    : <button onClick={this.getRandom}>Random Number</button>
                }
            </div>
        )
    }
}

export default Clicker;

/*
state:
    - Plain Old Javascript Object
    - Mutable
    - Stores changing component data

props:
    - Plain Old Javascript Object
    - Not Mutable
    - Stores component configuration

Downward Data Flow: state as props pattern:
    - a common pattern: a stateful parent component passing down its state values
    as props to stateless dumb child components

class CounterParent extends Component {
    cosntructor(props) {
        super(props);
        this.state = { count: 5}
    }

    render() {
        <CounterChild count={this.state.count} />
    }
}
*/