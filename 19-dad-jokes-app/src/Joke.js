import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {
    render() {
        const { joke } = this.props;
        return (
            <div className='Joke'>
                <button>Upvote</button>
                <p>{}</p>
                <button>Downvote</button>
                <p>{joke}</p>
                <img src=""></img>
            </div>
        )
    }
}

export default Joke;