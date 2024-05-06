import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';

class Soda extends Component {
    render() {
        return (
            <div>
                <Message>
                    <p>Soda</p>
                </Message>
                <Message>
                    <NavLink to='/'>Go Back</NavLink>
                </Message>
            </div>
        )
    }
}

export default Soda;