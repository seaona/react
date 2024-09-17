import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Grid2 } from "@mui/material";
import useTodoState from "./hooks/useTodoState";

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);

    // it will run anytime a component renders,when it changes TODO
    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]) // it will run only when todo changes

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid2
                container
                justifyContent='center'
                style={{ marginTop: "1rem" }}
            >
                <Grid2 item xs={11} md={8} lg={4}  style={{ width: "600px" }}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid2>
            </Grid2>

        </Paper>
    );
}

export default TodoApp;
