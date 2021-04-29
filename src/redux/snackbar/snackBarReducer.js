import { snackBarTypes } from './snackBarTypes';
import { Slide } from "@material-ui/core";
import { Fade } from "@material-ui/core";
import { Glide } from "@material-ui/core";

const INITIAL_STATE = {
    isActive: false,
    message: 'default message',
    transition: Slide,
    severity: "sucess"
};

const snackBarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case snackBarTypes.OPEN_SNACKBAR:
            return {
                ...state,
                isActive: true,
                severity: action.payload.severity,
                message: action.payload.message,
            }
        case snackBarTypes.CLOSE_SNACKBAR:
            return {
                ...state,
                isActive: false
            }
        default:
            return state
    }
};

export default snackBarReducer;