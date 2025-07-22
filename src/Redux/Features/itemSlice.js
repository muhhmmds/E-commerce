import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
};
const cardSlice = createSlice({
    name: "itemSlice",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.item.push(action.payload);
        },
        removeItem: (state, action) => {
            // const nextCards = state.item.filter(
            //     (card) => card.id !== action.payload.id
            // );
            state.item = [];
        },
    },
});
export const { addItem, removeItem } = cardSlice.actions;
export default cardSlice.reducer;
