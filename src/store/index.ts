import { configureStore } from "@reduxjs/toolkit";
import  filterslice  from "./slices/filter.slice";


export default configureStore({
    reducer: {
        // Add your reducers here
        filterslice
    },
});
