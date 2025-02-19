import {configureStore, createSlice} from "@reduxjs/toolkit"
import counterSlice from "./slice/counterSlice"
import privacySlice from "./slice/privacySlice"


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
})

export default store