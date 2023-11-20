import React, { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        // we need to pass props to super in order to access to it in the constructor
        console.log(this.props); 
        // if we are not using props in the constructor, we can just use super()
    }

    render() {
        return <h1>DEMO COMPONENT</h1>;
    }
}

export default Demo;