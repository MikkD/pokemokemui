import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, IconButton, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Card, Paper, CardContent, Box, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { toggleTodo } from '../../../redux/todos/todosActions';
import { connect } from 'react-redux';


function TheList({ todos, toggleTodo }) {
    const classes = useStyles();


    return (
        <React.Fragment>
            <Grid item className={classes.listStyles}>
                <Box>
                    <Typography variant="h5" color="primary">Default Todos</Typography>
                    <Typography gutterBottom variant="subtitle1" color="textSecondary" >Number of todos: {todos.length}</Typography>
                </Box>
                <Paper>
                    <List>
                        {todos.map(todo =>
                            <ListItem divider={true} key={todo.id}>
                                <Typography variant="subtitle2">{todo.id}</Typography>
                                <Checkbox
                                    onChange={() => toggleTodo(todo.id)}
                                    checked={todo.completed}
                                />
                                <ListItemText primary={todo.title} />
                                <ListItemIcon aria-label="delete">
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemIcon>
                            </ListItem>
                        )}
                    </List>
                </Paper>
            </Grid>
        </React.Fragment >
    )
};
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
})

export default connect(null, mapDispatchToProps)(TheList)
