import { todosTypes } from './todosTypes';

const INITIAL_STATE = {
    isFetching: false,
    isError: false,
    todos: []
};

const todosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case todosTypes.START_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        case todosTypes.END_FETCHING:
            return {
                ...state,
                isFetching: false,
                todos: action.payload
            }
        case todosTypes.isError:
            return {
                ...state,
                isFetching: false,
                isError: action.payload
            }
        case todosTypes.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            }
        default:
            return state
    }
};

export default todosReducer;