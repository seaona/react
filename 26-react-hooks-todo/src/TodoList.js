import React from "react";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

function TodoList(props) {
  return (
    <Paper>
        <List>
            {props.todos.map(todo => (
                <>
                    <ListItem>
                    <ListItemText>
                        {todo.task}
                    </ListItemText>
                    </ListItem>
                    <Divider />
                </>
            ))}
        </List>
    </Paper>
  )
}

export default TodoList;
