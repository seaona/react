import React, { Component } from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import Navbar from './Navbar';

const Hater = () => <h1>I absolutely hate dogs!</h1>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<VendingMachine />} />
          <Route exact path='/soda' element={<Soda />} />
          <Route exact path='/chips' element={<Chips />} />
          <Route exact path='/sardine' element={<Sardines />} />
        </Routes>
      </div>
    );
  }
}

export default App;
