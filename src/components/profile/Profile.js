import React, {useRef, useState} from 'react';
import {BsArrowLeft, BsCheck2, BsPencil} from "react-icons/bs";

const Profile = ({navigateBack}) => {
    const [isNameEdit, setNameEdit] = useState(false);
    const [name, setName] = useState('dennis')
    const fileInputRef = useRef();


    const nameUpdate = () => {

    }

    const selectProfile = () => {
        fileInputRef.current.click();
    }

    return (
        <div className="w-full flex flex-col h-full">
            <div className="flex items-center space-x-10 bg-[#008069] text-white py-5 px-3">
                <BsArrowLeft onClick={navigateBack} className="cursor-pointer text-3xl font-bold"/>
                <p className="cursor-pointer font-semibold">Profile</p>
            </div>
            <div className="flex flex-col justify-center items-center my-10">
                <img src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
                     onClick={selectProfile}
                     className="rounded-full w-[15vw] h-[15vw] cursor-pointer object-cover"
                     alt=""/>
                <input type="file" ref={fileInputRef} hidden/>
            </div>
            <div className="bg-white px-3">
                <p className="py-4">Your Name</p>
                {!isNameEdit && (
                    <div className="w-full flex justify-between items-center">
                        <p className="py-3">username</p>
                        <BsPencil onClick={() => setNameEdit(true)} className="cursor-pointer"/>
                    </div>
                )}
                {
                    isNameEdit && (
                        <div className="w-full flex justify-between items-center py-3">
                            <input
                                className="w-[80%] outline-none border-b-2 border-blue-700 p-2"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"/>
                            <BsCheck2 onClick={nameUpdate} className="cursor-pointer text-2xl"/>
                        </div>
                    )
                }
            </div>
            <div className="px-3 my-5">
                <p className="py-10">this is not your username, this name will be visible to your whatsapp contacts</p>
            </div>
        </div>
    );
};

export default Profile;
