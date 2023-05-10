import axios from "axios";
import { ITask } from "../../models/ITask";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try{
//         dispatch(userSlice.actions.usersFetching())
//         // const response = await axios.get<ITask[]>('http://localhost:3006/tasks')
//         const response = await axios.get<ITask[]>('http://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     }catch(e){
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ITask[]>('http://jsonplaceholder.typicode.com/users')
            return response.data
        }catch(e){
            return thunkAPI.rejectWithValue("Not possible to download the tasks")
        }
    }
)