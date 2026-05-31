import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../supabase";
import type { CourseType } from "../../Types";



export const fetchProducts = createAsyncThunk(

    'fetchProducts',

    async (_, thunkAPI) => {

        const { data, error } = await supabase
            .from('courses')
            .select('*')

        if (error) return thunkAPI.rejectWithValue(error.message)

        return data

    }

)

type StateType = {
    products: CourseType[],
    status: "" | "LOADING" | "FULLFILED" | "FAILED"
}

const initialState: StateType = {
    products: [],
    status: ""

}


const productSlice = createSlice({

    name: "productSlice",

    initialState,

    reducers: {},

    extraReducers(builder) {

        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "LOADING"
            })

            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.status = 'FULLFILED'
            })

            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'FAILED'
            })
    },
})

export default productSlice