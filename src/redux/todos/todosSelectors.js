import { createSelector } from 'reselect';



export const todosSelector = (state) => state.todosReducer.todos;

export const todosSelectorSize = (state) => state.todosReducer.todos.length;

export const urgentTodosSelector = (state) => state.todosReducer.urgentTodos;

// export const urgentTodosSelectorSize = (state) => state.todosReducer.urgentTodos.length;

export const isErrorSelector = (state) => state.todosReducer.isError;

export const isFetchingSelector = (state) => state.todosReducer.isFetching;



