import React, { Component } from "react";

class MultipleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        //evt.target.name changes (password, email or username)
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit(evt) {
        evt.preventDefault(); // so it does not refresh the page on submit
        alert(`You typed: ${this.state.username}`);
        this.setState({ username: ''})
    }

    render() {
        return(
            <div>
                <h1>Form with Multiple Inputs</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='username' //this needs to be the same name as in the state property!
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

export default MultipleForm;