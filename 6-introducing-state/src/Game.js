import React, { Component } from 'react';

class Game extends Component {

    // initialize state
    constructor(props) {
        super(props);
        this.state = {
            score: 25,
            gameOver: false,
        }
    // we should never call this.setState in the constructor, bc component has not yet been mounted
    }

    render() { 
        return (
            <div>
                <h1>Your score is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;

// CHANGING STATE
/*
- this.stetState() is a built-in react method for changing component's state
- can call in any instance except the constructor
- takes an object describing the state changes
- patches the state object - the keys you didn't specify don't change
- it's asyncronous - the component state will eventually update. React controls when the state will actually change for performance reasons

*/


// SUPER()

class ComponentA {
    constructor() {
        console.log("Inside Component A constructor");
    }
}

class ComponentB extends ComponentA {
    constructor() {
        super(); // this initializes the component A constructor, otherwise we get an error
        console.log("Inside Component B constructor");
    }
}