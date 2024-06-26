import React, { Component } from "react";
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
        this.renderTodos = this.renderTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    renderTodos() {
        return(
            <div>
                {this.state.todos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        removeTodo={this.removeTodo}
                        updateTodo={this.updateTodo}
                        toggleTodo={this.toggleCompletion}
                    />
                ))}
            </div>
        )
    }

    addTodo(todo) {
        this.setState(() => ({
            todos: [...this.state.todos, todo]
        }));
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("IN COMPONENT DID UPDATE");
        console.log(prevState.todos);
        console.log(this.state.todos);
    }

    updateTodo(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    render() {
        return(
        <div className="TodoList">
            <h1>
                Todo List!<span>A Simple React Todo List App</span>
            </h1>
            <ul>
                {this.renderTodos()}
            </ul>
            <TodoForm addTodo={this.addTodo}/>
        </div>
        )
    }
}

export default TodoList;