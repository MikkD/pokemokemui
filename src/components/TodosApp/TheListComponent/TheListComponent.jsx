import React from 'react'
import { List } from '@material-ui/core';
import { Card, Paper, CardContent, Box, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import TheListItem from './TheListItem/TheListItem';
import TheListHeader from './TheListHeader/TheListHeader';

function TheListComponent({
    listName,
    color,
    todos,
    toggleTodo
}) {
    const classes = useStyles();
    console.log('TODOS_THE_LIST', todos)
    return (
        <React.Fragment>
            <Grid item className={classes.listStyles}>
                <TheListHeader
                    todos={todos}
                    color={color}
                    listName={listName}
                />
                <Paper>
                    <List>
                        {todos.map(todo =>
                            <TheListItem
                                key={todo.id}
                                todo={todo}
                                toggleTodo={toggleTodo}
                            />)}
                    </List>
                </Paper>
            </Grid>
        </React.Fragment >
    )
};
export default TheListComponent;


