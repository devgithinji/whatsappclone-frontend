import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
