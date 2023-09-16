import React from 'react';
import {TbCircleDashed} from "react-icons/tb";
import {BiCommentDetail} from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai";
import {BsFilter, BsThreeDotsVertical} from "react-icons/bs";
import ChartCard from "./chatcard/ChartCard";
import {Menu, MenuItem} from "@mui/material";

const ChatList = ({chats, onSelectChat, query, setQuery, setProfileView, setStatusView, createGroup, logout}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className="w-full flex flex-col h-full">
            <div className="flex justify-between items-center p-3">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={setProfileView}>
                    <img className="rounded-full w-10 h-10 cursor-pointer"
                         src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
                         alt=""/>
                    <p>username</p>
                </div>
                <div className="space-x-3 text-2xl flex">
                    <TbCircleDashed onClick={setStatusView} className="cursor-pointer"/>
                    <BiCommentDetail className="cursor-pointer"/>
                    <div>
                        <BsThreeDotsVertical onClick={handleClick} className="cursor-pointer"/>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            anchorOrigin={{
                                horizontal: 'right',
                                vertical: 'bottom'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={setProfileView}>Profile</MenuItem>
                            <MenuItem onClick={createGroup}>Create Group</MenuItem>
                            <MenuItem onClick={logout}>Log out</MenuItem>
                        </Menu>
                    </div>

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
                    chats.map((chat, index) => (
                        <ChartCard
                            key={index}
                            {...chat}
                            onClick={() => onSelectChat(chat)}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ChatList;
