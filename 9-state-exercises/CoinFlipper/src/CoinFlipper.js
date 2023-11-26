import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class CoinFlipper extends Component {
    static defaultProps = {
        coins : [
            { side: 'heads', imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"},
            { side: 'tails', imgSrc: "https://media.istockphoto.com/id/476142091/photo/quarter-dollar-us-coin-isolated-on-white.jpg?s=612x612&w=0&k=20&c=wNzr7m0Z3dhlf8_O1G3EFNz8u2tALVobVs4K4XfFN5c="}
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currentCoin: null,
            flips: 0,
            heads: 0,
            tails: 0
        }

        this.handleClick = this.handleClick.bind(this);
        this.flipCoin = this.flipCoin.bind(this);
    }

    handleClick(e) {
        this.flipCoin();
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState( oldState => {
            return {
                currentCoin: newCoin,
                flips: oldState.flips + 1,
                heads: oldState.heads + (newCoin.side === "heads" ? 1 : 0),
                tails: oldState.tails + (newCoin.side === "tails" ? 1 : 0),
            }
        })
    }

    render() {
        return(
            <div className="CoinFlipper">
                <h1>Let's flip a coin!</h1>
                {this.state.currentCoin && <Coin coin={this.state.currentCoin} />}  
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>
                    Out of {this.state.flips} flips,there have been {this.state.heads} heads and {this.state.tails} tails.
                </p>
            </div>

        )
    }
}

export default CoinFlipper;