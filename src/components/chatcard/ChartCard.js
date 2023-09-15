import React from 'react';
import moment from "moment";

const ChartCard = ({username, timestamp, profilePic, unreadMessages, shortMessage, children, onClick}) => {


    const timeStampText = () => {
        const today = moment();
        const extractedDate = moment(timestamp);

        const daysDiff = today.diff(extractedDate, 'days')

        if (daysDiff < 1) {
            return extractedDate.format("h:mm a")
        }

        if (daysDiff < 8) {
            return extractedDate.format("dddd")
        }
        return extractedDate.format("D/MM/YYYY")
    }

    return (
        <div onClick={onClick}>
            <hr/>
            <div className="flex items-center justify-center py-2 group cursor-pointer">
                <div className="w-[20%]">
                    <img className="h-14 w-14 rounded-full"
                         src={profilePic} alt=""/>
                </div>
                <div className="pl-5 w-[80%]">
                    <div className="flex justify-between items-center">
                        <p className="text-lg">{username}</p>
                        <p className="text-sm">{timeStampText()}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>{`${shortMessage.substring(0, 20)}...`}</p>
                        <div className="flex space-x-2 items-center">
                            <p className="text-xs py-1 px-2 text-white bg-green-500 rounded-full">{unreadMessages}</p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default ChartCard;
