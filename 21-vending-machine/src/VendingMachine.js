import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';

class VendingMachine extends Component {
    render() {
        return (
            <div>
                <Message>
                    <p>Hello I am a Vending Machine</p>
                </Message>
                <Message>
                    <NavLink exact activeClassName="active" to='/soda'>Soda</NavLink>
                    <NavLink exact activeClassName="active" to='/chips'>Chips</NavLink>
                    <NavLink exact activeClassName="active" to='/sardine'>Sardine</NavLink>
                </Message>      
            </div>
        )
    }
}

export default VendingMachine;