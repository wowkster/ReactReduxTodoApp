import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {
                task: 'Buy a new gaming laptop',
                timestampAdded: 1628972880115,
            },
            {
                task: 'Complete a previous task',
                timestampAdded: 1628972880115,
            },
            {
                task: 'Create a vide for YouTube',
                timestampAdded: 1628972880115,
            },
            {
                task: 'Create a new portfolio site',
                timestampAdded: 1628972880115,
            },
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos.splice(action.payload.index, 1)
        },
        clearAllTodos: state => {
            state.todos.splice(0, state.todos.length)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, clearAllTodos } = todoSlice.actions

export default todoSlice.reducer
