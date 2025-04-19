import { createSlice } from '@reduxjs/toolkit';

export const searsh = createSlice({
    name: 'searsh',
    initialState: "All",
    reducers: {
        searsh: (state, action) => {
            return action.payload;
        }

    }
})

export const { searsh: searshAction } = searsh.actions;

export default searsh.reducer;
