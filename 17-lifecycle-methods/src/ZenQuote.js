import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css'
class ZenQuote extends Component {
    // 1st this is called
    constructor(props) {
        console.log("INSIDE THE CONSTRUCTOR");
        super(props);
        this.state = {quote: '', isLoaded: false};
    }

    // 3rd this is called
    componentDidMount() {
        console.log("COMPONENT DID MOUNT")
        // load data
        // set state with that data
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(
                function() {
                    this.setState({quote: response.data, isLoaded: true});
                }.bind(this),
                3000
            )

        });
    }

    componentDidUpdate() {
        console.log("COMPONENT DID UPDATE")
    }

    // 2nd this is called - and called again everytime state is updated
    render() {
        console.log("INSIDE RENDER");
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                    <div className='spinner'></div>
                )}
            </div>
        );
    }
}

export default ZenQuote;