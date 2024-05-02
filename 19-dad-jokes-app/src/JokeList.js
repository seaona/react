import React, { Component } from 'react';
import Joke from './Joke';
import './JokeList.css';
import axios from 'axios';

const API_URL = 'https://icanhazdadjoke.com/';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    }
  }

  async componentDidMount() {
    let jokes = []
    while(jokes.length < this.props.numJokesToGet) {
      try {
          const response = await axios.get(API_URL, {
            headers: {
              Accept: 'application/json',
            }
          });
          jokes.push(response.data.joke)
      } catch (e) {
          console.log("Error shuffling deck:", e);
      }
    }
    this.setState({jokes});
  }

    render() {
        return (
          <div className="JokeList">
            <div className='JokeList-sidebar'>
              <h1 className='JokeList-title'><span>Dad</span>Jokes</h1>
              <img src="https://seeklogo.com/images/F/facebook-emoji-logo-75EA6BB076-seeklogo.com.png" />
              <button className='JokeList-getmore'>New Jokes</button>
            </div>

            <div className='JokeList-jokes'>
              {this.state.jokes.map((j) =>
                <Joke
                  joke={j}
                  key={j.id}
                />
              )}
            </div>

        </div>
        );
      }
}

export default JokeList;