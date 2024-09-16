import React from "react";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <Paper>
        <List>
            {todos.map(todo => (
                <>
                    <Todo
                        id={todo.id}
                        task={todo.task}
                        key={todo.id}
                        completed={todo.completed}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />
                    <Divider />
                </>
            ))}
        </List>
    </Paper>
  )
}

export default TodoList;
