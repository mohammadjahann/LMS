import { createSlice } from "@reduxjs/toolkit"

const initialState: string[] | [] = []

const cartSlice = createSlice({

    name: 'cartSlice',

    initialState,

    reducers: {
        fetchData: (_, action) => {
            return action.payload
        },
        addToCart: (state, action) => {
            return [...state, action.payload]
        },
        removeFromCart: (state, action) => {
            return state.filter(id => id !== action.payload)
        }
    }
})

export default cartSlice