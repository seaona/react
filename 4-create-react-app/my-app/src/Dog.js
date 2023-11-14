import React, { Component } from 'react';
import './Dog.css';
import cat from './cat.jpeg'

class Dog extends Component {
    render() {
        return (
            <div className="Dog">
                <h1>DOG</h1>
                <div>I am another div</div>
                <img className="Dog-img" src={cat} />
            </div>
        )
    }
}

export default Dog;