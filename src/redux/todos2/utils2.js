export const filterData = (data, action) => data.filter(todo => todo.id !== action.payload);

export const toggleData = (data, action) => {
    return data.map(todo => {
        if (todo.id === action.payload) {
            return {
                ...todo,
                completed: !todo.completed
            }
        }
        return todo
    })
};