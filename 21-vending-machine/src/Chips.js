import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';

class Chips extends Component {
    render() {
        return (
            <div>
                <Message>
                    <p>Chips</p>
                </Message>
                <Message>
                    <NavLink to='/'>Go Back</NavLink>
                </Message>
            </div>
        )
    }
}

export default Chips;