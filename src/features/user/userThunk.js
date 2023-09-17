import {customFetch} from "../../utils/axios";

export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const response = await customFetch.post(url, user);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.error);
    }
}


export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        const response = await customFetch.post(url, user);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.error);
    }
}
