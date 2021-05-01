import { snackBarTypes } from './snackBarTypes';


const INITIAL_STATE = {
    isActive: false,
    message: 'default message',
    transition: null,
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
                transition: action.payload.transition
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