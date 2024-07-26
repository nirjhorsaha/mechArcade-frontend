import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    _id: string;
    name: string;
    price: number;
    brand: string;
    stock: number;
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
            const existingItem = state.items.find(item => item._id === newItem._id);
      
            if (!existingItem) {
              state.items.push(newItem);
            }
          },
        // Additional reducers for other cart functionalities can be added here
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
