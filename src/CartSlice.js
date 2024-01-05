import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        deleteExp: (state, action) => {
            state.items = state.items.filter((expend) => expend.id !== action.payload.id)
        },
        decreaseCart(state, action) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            state.items[itemIndex].quantity -= 1

        },
        increaseCart(state, action) {
            const itemIndex = state.items.findIndex((items) => items.id === action.payload.id)
            state.items[itemIndex].quantity += 1
        }
    }
})
export const { addItem, clearItem, deleteExp, decreaseCart, increaseCart } = cartSlice.actions

export default cartSlice.reducer
