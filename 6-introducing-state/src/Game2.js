import React, { Component } from 'react';

// Uses the Class Properties Proposal
// Only Works with Babel

class Game2 extends Component {
    state = {
        score: 25,
        gameOver: false,
    };

    render() { 
        return(
            <div>
                <h1>Your score is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game2;