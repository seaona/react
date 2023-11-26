import React, { Component } from 'react';

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
        this.goodKill = this.goodKill.bind(this);
        this.incrementScore = this.incrementScore.bind(this);
    }

    singleKill() {
        // we should not update the state like this
        this.setState({ score: this.state.score +1})
    }

    // this only adds the last setState
    // setState is asynchronous, so it's risky to assume the previous call has finished when you call it
    // alos react sometimes batch calls to setState together for performance reasonse
    tripleKill() {
        this.setState({ score: this.state.score +1});
        this.setState({ score: this.state.score +1});
        this.setState({ score: this.state.score +5});
    }

    goodKill() {
        this.setState(st => {
            return {score: st.score + 1}
        });

        this.setState(st => {
            return {score: st.score + 1}
        });

        this.setState(st => {
            return {score: st.score + 2}
        });
    }

    // we should use the setState Callback Form

    // the common pattern for doing the above is to have our own function to update the state
    incrementScore(currentState) {
        return { score: currentState.score + 1};
    }
    
    tripKill() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }

    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill!</button>
                <button onClick={this.tripleKill}>Triple Kill!</button>
                <button onClick={this.goodKill}>Good Kill!</button>
                <button onClick={this.tripKill}>Trip Kill!</button>

            </div>
        );
    }
}

export default ScoreKeeper;