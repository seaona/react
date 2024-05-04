import React, { Component } from 'react';
import Joke from './Joke';
import './JokeList.css';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const API_URL = 'https://icanhazdadjoke.com/';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false,
    }
    // we are not putting this var in state since it will cause a re-render in every change
    this.seenJokes = new Set(this.state.jokes.map(j => j.joke));
    console.log(this.seenJokes)
    this.handleClick = this.handleClick.bind(this);
  }

 componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  async getJokes() {
    try {
      let jokes = []
      while(jokes.length < this.props.numJokesToGet) {
        let response = await axios.get(API_URL, {
          headers: {
            Accept: 'application/json',
          }
        });
        let newJoke = response.data.joke;
        if(!this.seenJokes.has(newJoke)) {
          jokes.push({id: uuid(), joke: newJoke, votes: 0});
        } else {
          console.log("FOUND A DUPLICATE");
          console.log(newJoke)
        }
          
      }
      this.setState(st => ({
        jokes: [...st.jokes, ...jokes],
        loading: false,
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    } catch (e) {
      alert(e);
      this.setState({loading: false})
    }
  }

  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(j =>
          j.id === id ? {...j, votes: j.votes + delta} : j
        )
      }),
      () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    )
  }

  handleClick() {
    this.setState({ loading: true}, this.getJokes);
  }

  render() {
    if(this.state.loading) {
      return (
        <div className='JokeList-spinner'>
          <i className='far fa-8x fa-laugh fa-spin'></i>
          <h1 className='JokeList-title'>Loading...</h1> 
        </div>
      )
    }
    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'><span>Dad</span>Jokes</h1>
          <img src="https://seeklogo.com/images/F/facebook-emoji-logo-75EA6BB076-seeklogo.com.png" />
          <button
            className='JokeList-getmore'
            onClick={this.handleClick}
          >Fetch Jokes
          </button>
        </div>

        <div className='JokeList-jokes'>
          {jokes.map((j) =>
            <Joke
              joke={j.joke}
              votes={j.votes}
              key={j.id}
              upvote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
          )}
        </div>

    </div>
    );
  }
}

export default JokeList;