import React, { Component } from 'react';

// how to bind if we don't have a constructor bc we use the state syntax
class BrokenClick2 extends Component {
    state = { clicked: false };

    // it will bind the method to the instance of this component
    handleClick = e => {
        this.setState({
            clicked: true
        })
    }
    render() {
        return(
            <div>
                <button
                    onClick={this.handleClick}
                >Click me
                </button>
                <h1>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</h1>
            </div>

        )
    }
}

export default BrokenClick2;