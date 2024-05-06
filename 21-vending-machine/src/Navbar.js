import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';
import './Navbar.css';

class Sardines extends Component {
    render() {
        return (
            <div className='Navbar'>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/soda'>Soda</NavLink>
                <NavLink exact to='/chips'>Chips</NavLink>
                <NavLink exact to='/sardine'>Sardine</NavLink>
            </div>
        )
    }
}

export default Sardines;