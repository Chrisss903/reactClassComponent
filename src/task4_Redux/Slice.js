import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "slice",
    initialState: { users: [], products: [], searchProd: '' },
    reducers: {
        setUser: (state, action) => {
            state.users = [...state.users, action.payload];
        },

        delUser: (state, action) => {
            state.users = state.users.filter((_, index) => index !== action.payload);
        },

        setProducts: (state, action) => {
            state.products = [...action.payload];
        },

        setProductSearch: (state, action) => {
            state.searchProd = action.payload;
        }
    }
});

export const { setUser, delUser, setProducts, setProductSearch } = slice.actions;
export default slice.reducer;
