import React, {useState} from 'react';

const Auth = ({setAuth}) => {
    const [isSignUp, setSignUp] = useState(false)


    const handleSubmit = () => {
        setAuth(true)
    }

    return (
        <div className="h-[100vh] w-full bg-[#00a884] grid place-items-center">
            <div className="w-[30%] bg-slate-200 shadow-md rounded-md p-3 flex flex-col gap-5 text-center">
                <p className="text-3xl font-semibold">Whatsapp Web clone</p>
                <p className="text-2xl">{isSignUp ? 'Sign Up' : 'Sign In'}</p>
                {isSignUp &&
                    <input type="text" className="outline-none rounded-md px-3 py-2" placeholder="Enter username"/>}
                <input type="number" className="outline-none rounded-md px-3 py-2" placeholder="Enter phone number"/>
                <input type="password" className="outline-none rounded-md px-3 py-2" placeholder="Enter password"/>
                <button className="bg-[#00a884] py-2 px-3 rounded-md"
                        onClick={handleSubmit}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                <p className="cursor-pointer"
                   onClick={() => setSignUp(!isSignUp)}>{isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}</p>
            </div>
        </div>
    );
};

export default Auth;
