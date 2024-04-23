import React, { Component } from "react";
import TodoForm from './TodoForm';
import Todo from './Todo';

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
    }

    renderTodos() {
        return(
            <div>
                {this.state.todos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        removeTodo={this.removeTodo}
                        updateTodo={this.updateTodo}
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

    updateTodo(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    render() {
        return(
        <div>
            <h1>Todo List!</h1>
            <p>A Simple React Todo List App</p>
            <hr></hr>
            <ul>
                {this.renderTodos()}
            </ul>
            <TodoForm addTodo={this.addTodo}/>
        </div>
        )
    }
}

export default TodoList;