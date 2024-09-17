import React from "react";
import TextField from '@mui/material/TextField';
import initialVal from './hooks/useInputState';

function EditTodoForm({ editTodo, id, task, toggleEditForm }) {
    const [value, handleChange, reset] = initialVal(task);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm();
            }}
            style={{
                marginLeft: "1rem",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // background: "red"
            }}
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}

export default EditTodoForm;