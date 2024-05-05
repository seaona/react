import React, { Component } from 'react';

class Dog extends Component {
    componentDidMount() {
        console.log("DOG DID MOUNT!");
    }
    componentWillUnmount() {
        console.log("DOG WILL MOUNT!");
    }
    render() {
        console.log("INSIDE RENDER");
        return (
            <div>
                <h1>Dog!!</h1>
                <h3>This dog is named: {this.props.name}</h3>
            </div>
        )
    }
}

export default Dog;