import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chat } from "./interface";

//define the interface for all the states that userslice is going to be using
interface UtilSliceState {
    show: string | null,
    chat: Chat[] | [],
    videos: any

}

//define the initalstate for this utilslice 
const initialState: UtilSliceState = {
    show: null,
    chat: [],
    videos: [
        { title: "Using artificial intelligence in radiology", src: "https://www.youtube.com/embed/dCDuMyzWS8Q?si=waOGfE5zIb8iq-M1" },
        { title: "Advanced Radiological Equipments", src: "https://www.youtube.com/embed/-633zoLcHHo?si=AlHxfYGSrMuhPe4O" },
        { title: "Radiology Best Resources", src: "https://www.youtube.com/embed/X_JCZtAa0ow?si=gOeIy9uhuaFmLG-I" },

    ],

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
        addChat: (state: UtilSliceState, action: PayloadAction<Chat>) => {
            state.chat = [...state?.chat, action.payload];
        },

    },
})



export default utilSlice.reducer;
export const {
    showItem,
    closeItem,
    addChat
} = utilSlice.actions