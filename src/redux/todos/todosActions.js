import axios from 'axios';
import { todosTypes } from './todosTypes';


export const fetchTodos = () => {
    console.log('API_CALL')
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

export const toggleTodo = (id) => ({ type: todosTypes.TOGGLE_TODO, payload: id });

export const toggleUrgentTodo = (id) => ({ type: todosTypes.TOGGLE_URGENT_TODO, payload: id });

export const deleteTodo = (id) => ({ type: todosTypes.DELETE_TODO, payload: id })

export const addTodo = (newTodo) => ({ type: todosTypes.ADD_TODO, payload: newTodo });

export const addUrgentTodo = (newTodo) => ({ type: todosTypes.ADD_IMPORTANT_TODO, payload: newTodo });