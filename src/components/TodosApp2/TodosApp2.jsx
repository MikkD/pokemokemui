import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../../redux/todos2/todos2Actions';
import { todosSelector, isErrorSelector, isFetchingSelector, urgentTodosSelector } from '../../redux/todos2/todos2Selectors';
import { Loader } from '../PokiMokiApp/utils';
import { Container, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import TheListComponent2 from './TheListComponent2/TheListComponent2';
import TodoForm from './TodoForm/TodoForm';

function TodosApp2({ todos, isError, isFetching, fetchTodos, urgentTodos }) {
    console.log('%cTODOS_RENDERED', "color:gold", todos)
    console.log('%curgentTodosSelector', "color:red", urgentTodos)

    useEffect(() => {
        fetchTodos()
    }, [])

    if (isFetching || todos.length < 1) return <Loader />

    if (isError) return <Typography variant="h4">Error</Typography>

    return (
        <React.Fragment>
            <Container>
                <Grid container direction="column">
                    <Typography style={{ textAlign: "center" }} variant="h4">TODO_2</Typography>
                    <TodoForm />
                    {urgentTodos.length > 0 &&
                        <TheListComponent2
                            listName={'Urgent Todos'}
                            color="secondary"
                            todos={urgentTodos}
                        />
                    }
                    <TheListComponent2
                        listName={'Default Todos'}
                        todos={todos} />
                </Grid>
            </Container>
        </React.Fragment>
    )
};




const mapStateToProps = (state) => ({
    isError: isErrorSelector(state),
    isFetching: isFetchingSelector(state),
    todos: todosSelector(state),
    urgentTodos: urgentTodosSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosApp2)

