import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const taskFound = state.find( task => task.id === action.payload);
            if(taskFound){
                state.splice( state.indexOf(taskFound), 1);
            }
        },
        updateTask : (state, action) => {
            const { id, title, description, date } = action.payload;
            const taskFound = state.find( task => task.id === id);
            if(taskFound){
                taskFound.title = title,
                taskFound.description = description
                taskFound.date = date
            }
        }
    }
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer