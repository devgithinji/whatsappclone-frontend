import React, {useRef, useState} from 'react';
import {BsArrowLeft, BsCheck, BsCheck2} from "react-icons/bs";

const NewGroup = ({navigateBack, createGroup}) => {
    const [name, setName] = useState('')

    const fileInputRef = useRef();


    const selectProfile = () => {
        fileInputRef.current.click();
    }

    return (
        <div className="w-full flex flex-col h-full z-15">
            <div className="flex items-center space-x-10 bg-[#008069] text-white py-5 px-3">
                <BsArrowLeft onClick={navigateBack} className="cursor-pointer text-3xl font-bold"/>
                <p className="cursor-pointer font-semibold">New Group</p>
            </div>
            <div className="flex flex-col justify-center items-center my-10">
                <div className="border-4 border-green-700 rounded-full">
                    <img src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
                         onClick={selectProfile}
                         className="rounded-full w-[15vw] h-[15vw] cursor-pointer object-cover"
                         alt=""/>
                </div>
                <input type="file" ref={fileInputRef} hidden/>
            </div>
            <div className="w-full flex flex-col gap-10 justify-between items-center py-3 px-3">
                <input
                    className="w-full outline-none border-b-2 border-green-600 p-2 bg-transparent"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"/>
                <div className="rounded-full bg-green-600 grid place-content-center"
                     style={{height: '50px', width: '50px'}}>
                    <BsCheck onClick={createGroup} className="text-white text-3xl font-bold cursor-pointer"/>
                </div>
            </div>

        </div>
    );
};

export default NewGroup;
