import { todosTypes } from './todosTypes';
import { filterData, toggleData } from './utils'

const INITIAL_STATE = {
    isFetching: false,
    isError: false,
    todos: [],
    urgentTodos: []
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
                todos: toggleData(state.todos, action)
            }
        case todosTypes.DELETE_TODO:
            return {
                ...state,
                todos: filterData(state.todos, action),
                urgentTodos: filterData(state.urgentTodos, action)
            }
        case todosTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case todosTypes.ADD_IMPORTANT_TODO:
            return {
                ...state,
                urgentTodos: [...state.urgentTodos, state.todos.find(todo => todo.id === action.payload)],
                todos: filterData(state.todos, action)
            }
        case todosTypes.TOGGLE_URGENT_TODO:
            return {
                ...state,
                urgentTodos: toggleData(state.urgentTodos, action)
            }
        default:
            return state
    }
};

export default todosReducer;


