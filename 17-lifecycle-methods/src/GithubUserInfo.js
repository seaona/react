import React, { Component } from 'react';
import axios from 'axios';


class GithubUserInfo extends Component {
    // 1st this is called
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
            name: '',
        };
    }

    // 3rd this is called
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        let data = response.data;
        this.setState({imgUrl: data.avatar_url, name: data.name})
    }

    // 2nd this is called - and called again everytime state is updated
    render() {
        return (
            <div>
                <h1>GITHUB USER: {this.state.name}</h1>
                <img src={this.state.imgUrl}/>
            </div>
        );
    }
}

export default GithubUserInfo;