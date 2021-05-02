import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import snackBarReducer from './snackbar/snackBarReducer';
import accordionReducer from './accordion/accordionReducer';
import todosReducer from './todos/todosReducer';

export const store = createStore(combineReducers(
    {
        snackBarReducer: snackBarReducer,
        accordionReducer: accordionReducer,
        todosReducer: todosReducer
    }
), composeWithDevTools(applyMiddleware(thunk)));

