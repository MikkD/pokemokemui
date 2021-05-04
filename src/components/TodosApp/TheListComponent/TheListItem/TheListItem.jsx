import React from 'react'
import { Divider, Typography, ListItem, ListItemText, ListItemIcon, IconButton, Checkbox } from '@material-ui/core';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { deleteTodo, addUrgentTodo } from '../../../../redux/todos/todosActions';

const TheListItem = ({
    todo: { id, completed, title },
    toggleTodo,
    deleteTodo,
    addUrgentTodo,
    isUrgentTodo
}) => {
    console.log('THE_LIST_ITEM_RENDERED')

    return (
        <React.Fragment>
            <ListItem divider={true} key={id}>
                <Typography variant="subtitle2">{id}</Typography>
                <Checkbox
                    aria-label="toggle  todo"
                    onChange={() => toggleTodo(id)}
                    checked={completed}
                    color="primary"
                />
                <ListItemText primary={title} />
                <ListItemIcon
                    aria-label="add urgent todo"
                    onClick={() => addUrgentTodo(id)}>
                    <IconButton>
                        {!isUrgentTodo && <AssignmentLateIcon color="error" />}
                    </IconButton>
                </ListItemIcon>
                <Divider style={{ width: '1px', height: '20px' }} />
                <ListItemIcon
                    aria-label="delete"
                    onClick={() => deleteTodo(id)}>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </ListItemIcon>
            </ListItem>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    addUrgentTodo: (id) => dispatch(addUrgentTodo(id))
})

export default connect(null, mapDispatchToProps)(TheListItem)
