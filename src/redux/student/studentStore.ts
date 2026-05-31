import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";



const studentStore = configureStore({
    reducer: {
        productsData: productSlice.reducer,
        cartData: cartSlice.reducer,
    }
})

export type RootState = ReturnType<typeof studentStore.getState>

export type AppDispatch = typeof studentStore.dispatch

export default studentStore