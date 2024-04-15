import React, { Component } from 'react';

class WiseSquareWithProps extends Component {
    constructor(props) {
        super(props);
        this.dispenseWisdom = this.dispenseWisdom.bind(this);
    }

    static defaultProps = {
        messages: [
            'A fool thinks himself to be wise, but a wise man knows himself to be a fool.',
            'Educating the mind without educating the heart is no education at all.',
            'No everything that is faced can changed, but nothing can be changed until it is faced.',
        ]
    }
    dispenseWisdom() {
        // syntax: this means we extract this,props.messages
        let { messages } = this.props;


        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

    // we pass the function but not execute it!
    render() {
        return (
            // if we use 'this' inside dispenseWisdom we need to bind it
                // Solution 1: bind it inline 'this.dispenseWisdom.bind(this)' - everytime we render the component, a new function is created, so it's not very efficient
                // Solution 2: use inmline arrow function 'onMouseEnter={() => this.dispenseWisdom()}
                // Solution 3 (good): bind it in props above. It's more performant and only bind once
            <div onMouseEnter={this.dispenseWisdom}>
                :D
            </div>
        );
    }
}

export default WiseSquareWithProps;