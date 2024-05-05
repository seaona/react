import React, { Component } from 'react';
import {Route, Routes, NavLink} from 'react-router-dom';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

const Hater = () => <h1>I absolutely hate dogs!</h1>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='App-nav'>
          <NavLink exact activeClassName="active" to='/'>About</NavLink>
          <NavLink exact activeClassName="active" to='/dog/e'>Dog Element</NavLink>
          <NavLink exact activeClassName="active" to='/dog/r'>Dog Render</NavLink>
          <NavLink exact activeClassName="active" to='/contact'>Contact</NavLink>
        </nav>

        <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/dog/e' element={<Dog name="Muffins" />} />
          <Route exact path='/dog/r' element={() => <Dog name="Biscuits" />} />
          <Route exact path='/dog/hater' element={<Hater />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>

      </div>
    );
  }
}

export default App;
