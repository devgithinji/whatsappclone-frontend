import React from 'react';
import StatusCard from "./StatusCard";

const StatusList = ({statusView}) => {
    return (
        <div className="w-full flex flex-col h-full">
            <StatusCard onClick={statusView}/>
            <hr/>
            <div className="w-full flex flex-col h-full overflow-y-scroll">
                <p className="py-2 px-3">Recent</p>
                {
                    [...Array(20)].map((_, index) => <StatusCard key={index} onClick={statusView}/>)
                }
            </div>
        </div>
    );
};

export default StatusList;
