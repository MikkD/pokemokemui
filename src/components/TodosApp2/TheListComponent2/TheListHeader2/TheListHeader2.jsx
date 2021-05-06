import React from 'react';
import { Box, Typography } from '@material-ui/core';

const TheListHeader2 = ({ listName, color, todosLen }) => {
    console.log('THE_LIST_HEADER_2_RENDERED_withName', listName)

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
                Number of {listName}: {todosLen}
            </Typography>
        </Box>
    )
};


export default TheListHeader2;
