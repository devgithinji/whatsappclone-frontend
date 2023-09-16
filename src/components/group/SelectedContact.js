import React from 'react';
import {AiOutlineClose} from "react-icons/ai";

const SelectedContact = ({profilePic, username, onRemoveContact}) => {
    return (
        <div className="flex gap-2 items-center">
            <img className="h-5 w-5 rounded-full"
                 src={profilePic} alt=""/>
            <p>{username}</p>
            <AiOutlineClose onClick={onRemoveContact} className="cursor-pointer text-2xl"/>
        </div>
    );
};

export default SelectedContact;
