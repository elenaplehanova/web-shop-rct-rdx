import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

const initialState: IUser = {
    email: "",
    token: "",
    id: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;
        },
        removeUser(state) {
            state.email = "";
            state.id = "";
            state.token = "";
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
