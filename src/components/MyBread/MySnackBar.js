import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, Button } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function MySnackBar() {
    const isActive = useSelector(state => state.snackBarReducer.isActive);
    const snackMessage = useSelector(state => state.snackBarReducer.message);
    const snackSeverity = useSelector(state => state.snackBarReducer.severity);
    const snackTransition = useSelector(state => state.snackBarReducer.transition);
    console.log('%cMySnackBar_TRIGGERED', "color:blue")
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return
        dispatch({ type: "CLOSE_SNACKBAR" })
    };

    const closeActionButton = <Button onClick={handleClose}>X</Button>;


    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
            open={isActive}
            autoHideDuration={6000}
            onClose={handleClose}
            TransitionComponent={snackTransition}>
            <MuiAlert action={closeActionButton} severity={snackSeverity}>
                {snackMessage}
            </MuiAlert>
        </Snackbar>
    )
}

export default MySnackBar
