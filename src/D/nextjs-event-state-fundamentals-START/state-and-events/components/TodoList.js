// ~/components/TodoList.js
import { Box, Button, Grid, TextField, List, ListItem, ListItemText, Typography } from '@mui/material';
// React's useState hook allows us to manage the internal state/data of our component
// in a way that the React framework can also notice and handle the "re-render"
// whenever state changes.
import { useState } from 'react';


// React components are designed to have a single parameter, commonly called "props".
// It's an object that will hold the info sent into the component.
// You can choose either to just call it props or you can provide a destructured
// object if you want to identify specific property names for the props.
// For example, if I needed a property called "color", I could have my
// parameter be:        TodoList({color}) {
export default function TodoList(props) {
    // Using the useState hook is a matter of applying Array Destructuring syntax.
    // useState is important in order to hook into React's rendering processes.
    const [todoText, setTodoText] = useState('');
    //     \______/  \_________/             \/
    //      getter    setter func             |- Initial value
    const [allTodos, setAllTodos] = useState([]);

    const onTodoTextChange = (event) => {
        console.log(event.target.value);
        setTodoText(event.target.value);
    }
    const onAddTodoClick = () => {
        console.log('Clicked the button');
        // Create a new list that has allTodos along with the new todo item
        const newListOfTodos = [...allTodos, todoText];
        setAllTodos(newListOfTodos); // Update our component state
        setTodoText(''); // Reset the <TextField>
    }

    return <>
        <TextField
            id="standard-basic"
            label="New Todo?"
            variant="standard"
            sx={ {width: '100%'} }
            onChange={onTodoTextChange}
            value={todoText}
        />
        <Button variant='contained' onClick={onAddTodoClick}>Add Todo</Button>
        <Grid>
            <List sx={{width: '100%'}}>
                {
                    allTodos.map((todoItem, index) => 
                    <ListItem key={index}>
                        <ListItemText>
                            <Typography variant="p" component="div">
                                {todoItem}
                            </Typography>
                        </ListItemText>
                    </ListItem>)
                }
            </List>
        </Grid>
    </> 
}
