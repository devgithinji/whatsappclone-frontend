import React from 'react';

const ContactItem = ({onClick, username, profilePic}) => {
    return (
        <div className="flex items-center justify-center group cursor-pointer gap-5 py-2 px-3" onClick={onClick}>
            <img className="h-14 w-14 rounded-full"
                 src={profilePic} alt=""/>
            <div className="flex-grow self-stretch flex flex-col justify-between">
                <p>{username}</p>
                <hr className="bg-[#008069] h-0.5 w-full"/>
            </div>
        </div>
    );
};

export default ContactItem;
