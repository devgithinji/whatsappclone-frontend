import React from 'react';

const StatusCard = ({onClick}) => {
    return (
        <div className="flex items-center justify-center group cursor-pointer gap-5 py-2 px-3" onClick={onClick}>
            <div className="">
                <img className="h-14 w-14 rounded-full"
                     src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg" alt=""/>
            </div>
            <div className="flex-grow flex flex-col gap-2">
                <p>username</p>
                <p className="text-sm">10:00am</p>
            </div>
        </div>
    );
};

export default StatusCard;
