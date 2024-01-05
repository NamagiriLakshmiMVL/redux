import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
            console.log(action.payload, state.items)
        },
        clearItem: (state, action) => {
            state.items = []
        }
    },
    deleteExp: (state, action) => {
        state.expenditure = state.expenditure.filter((expend) => {
            console.log(expend.id)
            return expend.id !== action.payload
        }
        )
        console.log("payload id", action.payload)

    }
})

export const { addItem, clearItem,deleteExp } = cartSlice.actions

export default cartSlice.reducer
