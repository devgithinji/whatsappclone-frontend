import React, {useEffect, useRef, useState} from 'react';
import {stories} from "../../utils/data";
import {AiOutlineClose} from "react-icons/ai";
import ProgressBar from "./ProgressBar";

const StatusView = ({onCloseStatusView}) => {
    const [currentStoryIndex, setCurrentIndexStory] = useState(0);
    const [statusItemWidth, setStatusItemWidth] = useState("0");
    const statusItemContainerRef = useRef();
    const duration = 3500

    useEffect(() => {
        const width = Math.ceil((0.2 * statusItemContainerRef.current.offsetWidth) / stories().length);
        setStatusItemWidth(`${width}px`);
    }, []);

    useEffect(() => {
        const nextStatus = setInterval(() => {
            const nextIndex = currentStoryIndex === (stories().length - 1) ? 0 : currentStoryIndex + 1;
            setCurrentIndexStory(nextIndex);
        }, duration)

        return () => clearInterval(nextStatus)
    }, [currentStoryIndex]);



    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-[#00a884]">
            <div className="absolute top-8 right-10">
                <AiOutlineClose onClick={onCloseStatusView} className="cursor-pointer text-3xl text-white"/>
            </div>
            <div className="flex justify-center gap-2 absolute top-10 w-full z-15" ref={statusItemContainerRef}>
                {
                    stories().map((story, index) => (
                        <ProgressBar
                            index={index}
                            key={index}
                            activeIndex={currentStoryIndex}
                            statusItemWidth={statusItemWidth}
                            duration={duration}
                        />
                    ))
                }
            </div>
            <div className="flex justify-center h-full">
                <img className="h-full object-contain" src={stories()[currentStoryIndex]} alt=""/>
            </div>
        </div>
    );
};

export default StatusView;
