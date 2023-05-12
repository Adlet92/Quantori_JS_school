import { ITask } from "../../models/ITask";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";
import { IPost } from "../../models/IPost";


interface UserState{
    users: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState ={
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IPost[]>) =>{
            state.isLoading = false;
            state.error = ''
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) =>{
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) =>{
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default userSlice.reducer;