import React from 'react'
import { Divider, Typography, ListItem, ListItemText, ListItemIcon, IconButton, Checkbox } from '@material-ui/core';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { deleteTodo, addUrgentTodo, toggleTodo } from '../../../../redux/todos2/todos2Actions';

const TheListItem2 = ({
    todo: { id, completed, title, isUrgent },
    toggleTodo,
    deleteTodo,
    addUrgentTodo,
}) => {
    console.log('THE_LIST_ITEM_2_RENDERED_with id and name ', id)

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
                        {!isUrgent && <AssignmentLateIcon color="error" />}
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
    addUrgentTodo: (id) => dispatch(addUrgentTodo(id)),
    toggleTodo: (id) => dispatch(toggleTodo(id))
})

export default connect(null, mapDispatchToProps)(TheListItem2)
