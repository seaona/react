import React, { Component } from "react";
import { v4 as uuid } from 'uuid';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo({...this.state, id: uuid(), completed: false});
        this.setState({ task: '' });
    }

    render() {
        return(
            <div>
                <h2>New Todo</h2>
                <form  className='TodoForm' onSubmit={this.handleSubmit}>
                    <label htmlFor='task'>New Todo</label>
                    <input
                        type='text'
                        name='task'
                        placeholder='New Todo'
                        value={this.state.task}
                        onChange={this.handleChange}
                        id='task'
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        )

    }
}

export default TodoForm;