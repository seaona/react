import React, { Component } from 'react';
import ScoreKeeper from './ScoreKeeper';
import IconList from './IconList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ScoreKeeper />
          <IconList />
      </div>
    );
  }

}

export default App;
