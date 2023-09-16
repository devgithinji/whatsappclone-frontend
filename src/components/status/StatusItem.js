import React from 'react';
import {FaEye} from "react-icons/fa";

const StatusItem = () => {
    return (
        <div className="flex flex-col items-center gap-5">
            <img className="rounded-full" style={{height: '100px', width: '100px'}}
                 src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg" alt=""/>
            <div className="flex gap-5 justify-center">
                <FaEye className="cursor-pointer text-3xl"/>
                <span>13</span>
            </div>
            <p>today 08:31</p>
        </div>
    );
};

export default StatusItem;
