import { createSelector } from 'reselect';

// export const todos_selector = (state) => state.todos2Reducer.todos

// export const todosSelector = createSelector(
//     todos_selector,
//     (todos) => todos.filter(todo => !todo.isUrgent)
// );

export const todosSelector = (state) => state.todos2Reducer.todos.filter(todo => !todo.isUrgent)


export const urgentTodosSelector = (state) => state.todos2Reducer.todos.filter(todo => todo.isUrgent);


// export const urgentTodosSelector = createSelector(
//     todos_selector,
//     (todos) => todos.filter(todo => todo.isUrgent)
// );



export const isErrorSelector = (state) => state.todos2Reducer.isError;

export const isFetchingSelector = (state) => state.todos2Reducer.isFetching;



