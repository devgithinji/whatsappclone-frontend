import axios from "axios";
import {getFromLocalStorage} from "./localstorage";

const customFetch = axios.create({
    baseURL: 'http://localhost:5454'
});


customFetch.interceptors.request.use((config) => {
    const token = getFromLocalStorage('token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
})

const checkForUnauthorizedResponse = (error, thunkAPI) => {
    if (error.response.status === 401) {
        thunkAPI.dispatch()
        return thunkAPI.rejectWithValue('unauthorized! Logging out')
    }

    return thunkAPI.return(error.response.data.error);

}

export {customFetch, checkForUnauthorizedResponse}




