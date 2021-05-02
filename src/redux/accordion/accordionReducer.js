import axios from 'axios';
const todos = [
    {
        id: 1,
        todo: 'clean shoes'
    },
    {
        id: 2,
        todo: 'watch movie'
    }
]

const INITIAL_STATE = {
    isFetching: false,
    movies: [],
    error: false,
    todos: todos,
    inputValue: ''
};

const accordionTypes = {
    START_FETCHING: "START_FETCHING",
    END_FETCHING: "END_FETCHING",
    IS_ERROR: "IS_ERROR",
    HANDLE_INPUT: "HANDLE_INPUT",
    ADD_TODO: "ADD_TODO"
};


const accordionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case accordionTypes.START_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        case accordionTypes.END_FETCHING:
            return {
                ...state,
                isFetching: false,
                movies: action.payload
            }
        case accordionTypes.IS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case accordionTypes.HANDLE_INPUT:
            return {
                ...state,
                inputValue: action.payload
            }
        case accordionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}

export default accordionReducer;



export const fetchMovies = () => {
    const url = `http://www.omdbapi.com/?apikey=3755d9aa&page=1&s=spiderman`;
    return function (dispatch) {
        dispatch({ type: "START_FETCHING" })
        axios.get(url)
            .then(movies => {
                console.log('MOVIES+++>', movies.data.Search)
                dispatch({ type: "END_FETCHING", payload: movies.data.Search })
            })
            .catch(error => {
                dispatch({ type: "IS_ERROR", payload: error })
            })
    };
};