import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import StatusItem from "./StatusItem";

const MyStatusList = ({onCloseStatusList}) => {
    return (
        <div className="w-full h-full flex flex-col py-3 px-2">
            <div className="w-full flex justify-end py-5">
                <AiOutlineClose onClick={onCloseStatusList} className="cursor-pointer text-3xl"/>
            </div>
            <div className="flex-grow w-full overflow-y-scroll grid grid-cols-5 gap-5">
                {
                    [...Array(20)].map((_, index) => <StatusItem key={index}/>)
                }
            </div>
        </div>
    );
};

export default MyStatusList;
