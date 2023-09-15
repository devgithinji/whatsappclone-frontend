import React, {useState} from 'react';
import {TbCircleDashed} from "react-icons/tb";
import {BiCommentDetail} from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai";
import {BsFilter} from "react-icons/bs";
import ChartCard from "./chatcard/ChartCard";

const HomePage = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {

    }

    return (
        <div className="relative h-[100vh]">
            <div className="w-full py-14 bg-[#00a884] -z-10 fixed"></div>
            <div className="grid place-items-center h-full">
                <div className="flex bg-[#f0f2f5] h-[90vh]  w-[90%]">
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
                                    [...Array(10)].map((_, index) => (
                                        <div key={index}>
                                            <hr/>
                                            <ChartCard/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <div className="max-w-[70%] text-center flex flex-col gap-10 justify-center">
                                <img src="/images/mainchaticon.png" className="h-2/5 object-contain" alt=""/>
                                <h1 className="text-4xl text-gray-600">Whatsapp Web</h1>
                                <p>send and receive message without keeping your phone online. Use
                                    whatsapp on up to 4
                                    linked devices and 1 phone at the same time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
