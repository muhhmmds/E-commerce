// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     cart: [],
//     totalQuantity: 0,
//     totalPrice: 0,
// };

// const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addToCard: (state, action) => {
//             state.cardQuantity += 1;
//             state.cardsPrice = 100 * state.cardQuantity;
//             const itemIndex = state.cards.findIndex(
//                 (item) => item.id === action.payload.id
//             );
//             if (itemIndex >= 0) {
//                 state.cards[itemIndex].cardQuantity += 1;
//             } else {
//                 const tempProduct = { ...action.payload, cardQuantity: 1 };
//                 state.cards.push(tempProduct);
//             }
//         },
//         removeItem: (state, action) => {
//             const nextCards = state.cards.filter(
//                 (card) => card.id !== action.payload.id
//             );
//             state.cards = nextCards;
//         },
//         increaseItemQuantity: (state, action) => {
//             const itemIndex = state.cards.findIndex(
//                 (item) => item.id === action.payload.id
//             );

//             if (itemIndex >= 0) {
//                 // state.cards[itemIndex].cardQuantity += 1;
//                 state.cardQuantity += 1;
//                 state.cardsPrice = 100 * state.cardQuantity;
//             }
//         },
//         decreaseItemQuantity: (state, action) => {
//             const itemIndex = state.cards.findIndex(
//                 (item) => item.id === action.payload.id
//             );
//             if (itemIndex >= 0) {
//                 // state.cards[itemIndex].cardQuantity += 1;
//                 state.cardQuantity -= 1;
//                 state.cardsPrice = 100 * state.cardQuantity;
//                 if (state.cardQuantity < 0) {
//                     state.cardQuantity = 0;
//                 }
//             }
//         },
//     },
// });

import { createSlice } from "@reduxjs/toolkit";
import { sectionSpecialData } from "../../Components/commonComponents/Data";
const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    items: sectionSpecialData,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push(action.payload);
            }
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("carttotal", cartTotal);
                    console.log("cartitem", cartItem);
                    const { price1, quantity } = cartItem;
                    console.log(price1, quantity);
                    const itemTotal = price1 * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        },
        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        },
    },
});

export const {
    addToCart,
    getCartTotal,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
