import React from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import { todosSelectorSize } from '../../../../redux/todos/todosSelectors';

const TheListHeader = ({ listName, color, todos }) => {
    console.log('TheListHeader_Rendered')
    return (
        <Box>
            <Typography
                variant="h5"
                color={color}>
                {listName}
            </Typography>
            <Typography
                gutterBottom
                variant="subtitle1"
                color="textSecondary" >
                Number of {listName}: {todos.length}
            </Typography>
        </Box>
    )
};

const mapStateToProps = (state) => ({
    todosSelectorSize: todosSelectorSize(state)
});
export default connect(mapStateToProps, null)(TheListHeader)
