import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: string[] = []

const cartSlice = createSlice({

    name: 'cartSlice',

    initialState,

    reducers: {
        fetchData: (_, action: PayloadAction<string[]>) => {
            return action.payload
        },
        addToCart: (state, action: PayloadAction<string>) => {
            return [...state, action.payload]
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            return state.filter(id => id !== action.payload)
        },
        cartEmptier: () => []
    }
})

export default cartSlice