import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import {loginUser, registerUser} from "../features/user/userSlice";
import {toast} from "react-toastify";
import axios from "axios";


const Auth = ({setAuth}) => {
    const [isSignUp, setSignUp] = useState(false)
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const {isLoading, user} = useSelector(state => state.user)
    const dispatch = useDispatch();


    const handleSubmit = async () => {
        // setAuth(true)
        if (isSignUp) {
            if (!name || !phoneNumber || !password) {
                toast.error("All fields are required!")
                return;
            }
            dispatch(registerUser({fullName: name, phoneNumber: phoneNumber, password: password}))
            return;
        }

        if (!phoneNumber || !password) {
            toast.error("All fields are required!")
            return;
        }

        dispatch(loginUser({phoneNumber: phoneNumber, password: password}))
    }

    return (
        <div className="h-[100vh] w-full bg-[#00a884] grid place-items-center">
            <div className="w-[30%] bg-slate-200 shadow-md rounded-md p-3 flex flex-col gap-5 text-center">
                <p className="text-3xl font-semibold">Whatsapp Web clone</p>
                <p className="text-2xl">{isSignUp ? 'Sign Up' : 'Sign In'}</p>
                {isSignUp &&
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="outline-none rounded-md px-3 py-2"
                        placeholder="Enter username"/>
                }
                <input
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="outline-none rounded-md px-3 py-2"
                    placeholder="Enter phone number"/>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="outline-none rounded-md px-3 py-2"
                    placeholder="Enter password"/>

                {!isLoading && <button className="bg-[#00a884] py-2 px-3 rounded-md"
                                       onClick={handleSubmit}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>}
                {isLoading && <CircularProgress className="self-center"/>}
                <p className="cursor-pointer"
                   onClick={() => setSignUp(!isSignUp)}>{isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}</p>
            </div>
        </div>
    );
};

export default Auth;
