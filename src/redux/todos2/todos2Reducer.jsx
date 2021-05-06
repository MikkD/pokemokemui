import { todosTypes } from './todos2Types';
import { filterData, toggleData } from './utils2'

const INITIAL_STATE = {
    isFetching: false,
    isError: false,
    todos: [],
};

const todos2Reducer = (state = INITIAL_STATE, action) => {
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
                todos: toggleData(state.todos, action)
            }
        case todosTypes.DELETE_TODO:
            return {
                ...state,
                todos: filterData(state.todos, action),
            }
        case todosTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case todosTypes.ADD_IMPORTANT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            isUrgent: true
                        }
                    }
                    return todo
                })
            }
        default:
            return state
    }
};

export default todos2Reducer;


