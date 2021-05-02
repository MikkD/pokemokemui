import axios from 'axios';
import { todosTypes } from './todosTypes';


export const fetchTodos = () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1/todos';
    return async (dispatch) => {
        dispatch({ type: todosTypes.START_FETCHING })
        axios.get(url)
            .then(todos => {
                dispatch({ type: todosTypes.END_FETCHING, payload: todos.data })
            })
            .catch(error => {
                dispatch({ type: todosTypes.IS_ERROR, payload: error })
            })
    }
}

export const toggleTodo = (id) => ({ type: todosTypes.TOGGLE_TODO, payload: id })