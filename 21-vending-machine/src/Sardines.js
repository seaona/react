import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';

class Sardines extends Component {
    render() {
        return (
            <div>
                <Message>
                    <p>Sardines</p>
                </Message>
                <Message>
                    <NavLink to='/'>Go Back</NavLink>
                </Message>
            </div>
        )
    }
}

export default Sardines;