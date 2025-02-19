import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'count',
    initialState:  {counterVal: 0},
    reducers: {
        increment: (state, action) => {
            state.counterVal++;
        },
        decrement: (state, action) => {
            state.counterVal--;
        },
        add: (state, action) => {
            state.counterVal += action.payload
        },
        sub: (state, action) => {
            state.counterVal -= action.payload
        }
    }
})

export const {increment, decrement, add, sub} = counterSlice.actions;
export default counterSlice