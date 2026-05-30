import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";



const studentStore = configureStore({
    reducer: productSlice.reducer
})

export type RootState = ReturnType<typeof studentStore.getState>

export type AppDispatch = typeof studentStore.dispatch

export default studentStore