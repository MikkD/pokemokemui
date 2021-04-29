import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, Button } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function MySnackBar() {
    const isActive = useSelector(state => state.snackBarReducer.isActive);
    const snackMessage = useSelector(state => state.snackBarReducer.message);
    const snackSeverity = useSelector(state => state.snackBarReducer.severity);
    const dispatch = useDispatch();

    const handleClose = () => dispatch({ type: "CLOSE_SNACKBAR" })

    const closeActionButton = <Button onClick={handleClose}>X</Button>
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
            open={isActive}
            autoHideDuration={6000}
            onClose={handleClose}>
            <MuiAlert action={closeActionButton} severity={snackSeverity}>
                {snackMessage}
            </MuiAlert>
        </Snackbar>
    )
}

export default MySnackBar
