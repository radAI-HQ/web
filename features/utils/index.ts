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
        { "CPR First Aid AED": "https://youtu.be/xtuWk0O9bKk" },
        {
            "ASHI &amp; MEDIC First Aid | Sudden Cardiac Arrest":
                "https://youtu.be/ktgQIKgljpA",
        },
        { "First Aid : CPR Rescue Breaths": "https://youtu.be/Lbh7g-m_bwQ" },
        {
            "CPR in Action | A 3D look inside the body":
                "https://youtu.be/DUaxt8OlT3o",
        },
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