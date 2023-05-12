import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IPost[]>('http://localhost:3006/')
            return response.data
        }catch(e){
            return thunkAPI.rejectWithValue("Not possible to download the tasks")
        }
    }
)