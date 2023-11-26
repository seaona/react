import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.generate = this.generate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            balls: Array.from({
                length: this.props.numBalls
            })
        }
    }

    generate() {
        this.setState(curState => ({
            balls: curState.balls.map(
                n => Math.floor(Math.random() * this.props.maxNum) +1
            )
        }));

        // same as:
        /*
        let newLotto = [];
        for(let i=0; i< this.props.numBalls; i++) {
            newLotto[i] = Math.floor(Math.random() * this.props.maxNum +1 );

        }

        this.setState({
            balls: newLotto
        })
        */
    }

    handleClick() {
        this.generate();
    }

    render() {
        return (
            <div className='Lottery'>
                <h1>{this.props.title}</h1>
                {this.state.balls.map(t => <Ball num={t} />)}
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Lottery;