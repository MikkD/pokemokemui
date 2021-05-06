import React from 'react'
import { List } from '@material-ui/core';
import { Card, Paper, CardContent, Box, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import TheListItem from './TheListItem2/TheListItem2';
import TheListHeader from './TheListHeader2/TheListHeader2';

function TheListComponent2({
    listName,
    color,
    todos,
}) {
    const classes = useStyles();
    console.log('TODOS_2_THE_LIST with name ', listName, todos)

    return (
        <React.Fragment>
            <Grid item className={classes.listStyles}>
                <TheListHeader
                    todosLen={todos.length}
                    color={color}
                    listName={listName}
                />
                <Paper>
                    <List>
                        {todos.map(todo =>
                            <TheListItem
                                key={todo.id}
                                todo={todo}
                            />)}
                    </List>
                </Paper>
            </Grid>
        </React.Fragment >
    )
};
export default TheListComponent2;


