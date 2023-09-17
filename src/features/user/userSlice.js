import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginUserThunk, registerUserThunk} from "./userThunk";
import {addToLocalStorage} from "../../utils/localstorage";
import {toast} from "react-toastify";

const initialState = {
    isLoading: false,
    user: null
}

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
        return registerUserThunk('/auth/sign-up', user, thunkAPI);
    })

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        return loginUserThunk('/auth/sign-in', user, thunkAPI);
    })

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state, {payload}) => {
            state.user = null;
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                const { jwt } = action.payload;
                state.isLoading = false;
                addToLocalStorage('token', jwt);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                toast.error(action.payload);
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const { jwt } = action.payload;
                state.isLoading = false;
                addToLocalStorage('token', jwt);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                toast.error(action.payload);
            });
    }
})



export const {logoutUser} = userSlice.actions;
export default userSlice.reducer;
