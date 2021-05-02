import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../../redux/todos/todosActions';
import { todosSelector, isErrorSelector, isFetchingSelector } from '../../redux/todos/todosSelectors';
import { Loader } from '../PokiMokiApp/utils';
import { Container, Grid, List, ListItem, Checkbox } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import TheList from './TheList/TheList';

function TodosApp({ todos, isError, isFetching, fetchTodos }) {
    console.log(todos)

    useEffect(() => {
        fetchTodos()
    }, [])

    if (isFetching) return <Loader />

    if (isError) return <Typography variant="h4">Error</Typography>

    return (
        <React.Fragment>
            <Container>
                <Grid container>
                    <TheList todos={todos} />
                </Grid>
            </Container>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    todos: todosSelector(state),
    isError: isErrorSelector(state),
    isFetching: isFetchingSelector(state)
})
const mapDispatchToProps = (dispatch) => ({
    fetchTodos: () => dispatch(fetchTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosApp)
