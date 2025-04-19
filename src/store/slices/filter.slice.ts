import { createSlice } from "@reduxjs/toolkit";

export const filterslice = createSlice({
    name: "filter",
    initialState: "All",
    reducers: {
        setFilter: (state, action) => {
            return state = action.payload;
        },
    },
});

export const { setFilter } = filterslice.actions;

export default filterslice.reducer;
