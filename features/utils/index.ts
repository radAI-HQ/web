import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//define the interface for all the states that userslice is going to be using
interface UtilSliceState {
    show: string | null,
}

//define the initalstate for this utilslice 
const initialState: UtilSliceState = {
    show: null,
}


//create the slice
export const utilSlice = createSlice({
    name: "utils",
    initialState,
    reducers: {
        showItem: (state: UtilSliceState, action: PayloadAction<string | null>) => {
            if (state.show === action.payload) {
                state.show = null
            } else {
                state.show = action.payload
            }
        },
        closeItem: (state: UtilSliceState, action: PayloadAction<string | null>) => {
            state.show = null
        },

    },
})





export default utilSlice.reducer;
export const {
    showItem,
    closeItem,
} = utilSlice.actions