import { createStore } from 'redux';
import { combineReducers } from 'redux'
import snackBarReducer from './snackbar/snackBarReducer';


export const store = createStore(combineReducers({ snackBarReducer: snackBarReducer }));

