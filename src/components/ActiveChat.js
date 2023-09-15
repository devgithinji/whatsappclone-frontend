import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import {BsThreeDotsVertical} from "react-icons/bs";
import MessageInput from "./MessageInput";
import Chats from "./Chats";

const ActiveChat = ({username, timestamp, profilePic, unreadMessages, shortMessage, children}) => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="bg-[#e8e9ec] w-full">
                <div className="flex justify-between p-3">
                    <div className="flex gap-10 items-center">
                        <img src={profilePic} className="w-10 h-10 rounded-full" alt=""/>
                        <p>{username}</p>
                    </div>
                    <div className="flex gap-10 items-center text-2xl">
                        <AiOutlineSearch/>
                        <BsThreeDotsVertical/>
                    </div>
                </div>
            </div>
            <Chats/>
            <MessageInput/>
        </div>
    );
};

export default ActiveChat;
