import React, { useState } from 'react';
import { Grid, Paper, InputBase, Divider, Button, IconButton } from "@material-ui/core";
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { addTodo } from '../../../redux/todos/todosActions';
import uuid from 'react-uuid'

const TodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('')
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            completed: false,
            title: inputValue,
            id: uuid()
        };
        addTodo(newTodo)
        setInputValue('')
    };

    return (
        <React.Fragment>
            <Grid item className={classes.listStyles}>
                <Paper
                    onSubmit={handleSubmit}
                    className={classes.formContainer}
                    component="form">
                    <InputBase
                        required={true}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        color="secondary"
                        autoFocus={true}
                        className={classes.inputStyle}
                        placeholder="enter new todo" />
                    <Divider className={classes.divider} orientation="vertical" />
                    <Button onClick={handleSubmit} color="primary">Add Todo</Button>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(TodoForm);
