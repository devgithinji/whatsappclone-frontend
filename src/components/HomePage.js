import React, {useState} from 'react';
import {TbCircleDashed} from "react-icons/tb";
import {BiCommentDetail} from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai";
import {BsFilter} from "react-icons/bs";
import ChartCard from "./chatcard/ChartCard";
import chatsData from "../utils/data";
import DefaultChat from "./DefaultChat";
import ActiveChat from "./ActiveChat";

const HomePage = () => {
    const [query, setQuery] = useState('');
    const [chats, setChats] = useState(chatsData)
    const [activeChat, setActiveChat] = useState(null);


    const handleSearch = () => {

    }

    const onSelectChat = (chat) => {
        setActiveChat(chat);
    }

    return (
        <div className="relative h-[100vh]">
            <div className="w-full py-14 bg-[#00a884] -z-10 fixed"></div>
            <div className="grid place-items-center h-full">
                <div className="flex bg-[#f0f2f5] h-[90vh]  w-[90%] shadow-md">
                    <div className="left w-[30%] bg-[#e8e9ec] h-full">
                        <div className="w-full flex flex-col h-full">
                            <div className="flex justify-between items-center p-3">
                                <div className="flex items-center space-x-3">
                                    <img className="rounded-full w-10 h-10 cursor-pointer"
                                         src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
                                         alt=""/>
                                    <p>username</p>
                                </div>
                                <div className="space-x-3 text-2xl flex">
                                    <TbCircleDashed/>
                                    <BiCommentDetail/>
                                </div>
                            </div>
                            <div className="relative flex justify-center items-center bg-white py-4 px-3 gap-x-3">
                                <div className="bg-slate-200 flex w-full items-center px-2 rounded-md">
                                    <AiOutlineSearch className="text-3xl"/>
                                    <input
                                        className="border-none outline-none bg-inherit  w-full pl-3 py-2"
                                        placeholder="search or start new chart"
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}/>
                                </div>
                                <div>
                                    <BsFilter className="text-3xl"/>
                                </div>
                            </div>
                            <div className="bg-white overflow-y-scroll h-full px-3 grow">
                                {
                                    chats.map((chat, index) => <ChartCard key={index} {...chat}
                                                                          onClick={() => onSelectChat(chat)}/>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="right w-full">
                        <div className="w-full h-full">
                            {
                                activeChat ? <ActiveChat {...activeChat}/> : <DefaultChat/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
