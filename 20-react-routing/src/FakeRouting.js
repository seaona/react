import About from './About';
import Dog from './Dog';
import Contact from './Contact';

import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 'about'};
    this.changePage = this.changePage.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage});
  }

  renderPage() {
    if(this.state.page === 'about') return <About />
    else if(this.state.page === 'dog') return <Dog />
    else if(this.state.page === 'contact') return <Contact />
  }

  render() {
    return (
      <div className="App">
        <nav>
          <a onClick={() => this.changePage('about')}>About</a>
          <a onClick={() => this.changePage('contact')}>Contact</a>
          <a onClick={() => this.changePage('dog')}>Dog</a>
        </nav>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
