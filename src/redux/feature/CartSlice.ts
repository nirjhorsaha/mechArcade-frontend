import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    _id: string;
    name: string;
    price: number;
    brand: string;
    stock: number;
    quantity: number; // Include quantity in the CartItem
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item._id === newItem._id,
            );
            if (!existingItem) {
                state.items.push(newItem);
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(
                (item) => item._id !== action.payload,
            );
        },
        increaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find(
                (item) => item._id === action.payload,
            );
            if (item && item.quantity < item.stock) {  // ensure stock limit
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find(
                (item) => item._id === action.payload,
            );
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const item = state.items.find((item) => item._id === action.payload.id);
            if (item) {
              item.quantity = action.payload.quantity;
            }
          },
    },
});

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
