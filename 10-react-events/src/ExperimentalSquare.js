import React, { Component } from 'react';

class ExperimentalSquare extends Component {
    static defaultProps = {
        messages: [
            'A fool thinks himself to be wise, but a wise man knows himself to be a fool.',
            'Educating the mind without educating the heart is no education at all.',
            'No everything that is faced can changed, but nothing can be changed until it is faced.',
        ]
    }

    // experimental syntax for binding this
    // we only need to define this as an = and arrow function and 'this' will be binded to the component
    dispenseWisdom = () => {
        let { messages } = this.props;
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

    // we pass the function but not execute it!
    render() {
        return (
            <div onMouseEnter={this.dispenseWisdom}>
                :D
            </div>
        );
    }
}

export default ExperimentalSquare;