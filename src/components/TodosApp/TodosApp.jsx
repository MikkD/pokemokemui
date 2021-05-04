import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, toggleUrgentTodo, toggleTodo, addUrgentTodo } from '../../redux/todos/todosActions';
import { todosSelector, isErrorSelector, isFetchingSelector, urgentTodosSelector } from '../../redux/todos/todosSelectors';
import { Loader } from '../PokiMokiApp/utils';
import { Container, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import TheListComponent from './TheListComponent/TheListComponent';
import TodoForm from './TodoForm/TodoForm';

function TodosApp({ todos, isError, isFetching, fetchTodos, urgentTodos, toggleUrgentTodo, toggleTodo, addUrgentTodo }) {
    console.log('%cTODOS_RENDERED', "color:pink", todos)
    console.log('%cURGENT_TODOS_RENDERED', "color:pink", urgentTodos)

    useEffect(() => {
        fetchTodos()
    }, [])

    if (isFetching || todos.length < 1) return <Loader />

    if (isError) return <Typography variant="h4">Error</Typography>

    return (
        <React.Fragment>
            <Container>
                <Grid container direction="column">
                    <TodoForm />
                    <TheListComponent
                        listName={'Urgent Todos'}
                        isUrgent={true}
                        color="secondary"
                        toggleTodo={toggleUrgentTodo}
                        todos={urgentTodos} />

                    <TheListComponent
                        listName={'Default Todos'}
                        toggleTodo={toggleTodo}
                        todos={todos} />
                </Grid>
            </Container>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    todos: todosSelector(state),
    isError: isErrorSelector(state),
    isFetching: isFetchingSelector(state),
    urgentTodos: urgentTodosSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchTodos: () => dispatch(fetchTodos()),
    toggleUrgentTodo: (id) => dispatch(toggleUrgentTodo(id)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    addUrgentTodo: (id) => dispatch(addUrgentTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosApp)
