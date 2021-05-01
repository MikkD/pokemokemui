import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';
import snackBarReducer from './snackbar/snackBarReducer';
import accordionReducer from './accordion/accordionReducer';

export const store = createStore(combineReducers({ snackBarReducer: snackBarReducer, accordionReducer: accordionReducer }), applyMiddleware(thunk));

