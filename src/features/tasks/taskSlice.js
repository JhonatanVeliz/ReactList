import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            const listTasks = state;
            localStorage.setItem('tasks', JSON.stringify(listTasks));
        },
        deleteTask: (state, action) => {
            const taskFound = state.find( task => task.id === action.payload);
            if(taskFound){
                state.splice( state.indexOf(taskFound), 1);
            }
            const listTasks = state;
            localStorage.setItem('tasks', JSON.stringify(listTasks));
        },
        updateTask : (state, action) => {
            const { id, title, description, date } = action.payload;
            const taskFound = state.find( task => task.id === id);
            if(taskFound){
                taskFound.title = title;
                taskFound.description = description;
                taskFound.date = date;
            }
            const listTasks = state;
            localStorage.setItem('tasks', JSON.stringify(listTasks));
        }
    }
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer