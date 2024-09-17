import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from "@mui/material/Checkbox";
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import useToggle from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggle(false);

    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle} /> :
            <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none", width:"80%"}}>{task}</ListItemText>
            <ListItem secondaryAction={true} style={{width: "16%"}}>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <Delete/>
                </IconButton>
                <IconButton aria-label="Edit" onClick={toggle}>
                    <Edit />
                </IconButton>
            </ListItem>
            </>
        }
        </ListItem>
    )
}

export default Todo;