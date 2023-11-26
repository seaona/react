import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {

    render() {
        return(
            <div className='Coin'>
                <img src={this.props.coin.imgSrc} alt={this.props.coin.side}></img>
            </div>
        )
    }
}

export default Coin;