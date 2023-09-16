import React, {useEffect, useState} from 'react';

const ProgressBar = ({duration, activeIndex, statusItemWidth, index}) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prevState) => {
                if (prevState < 100) {
                    return prevState + 1;
                }
                clearInterval(progressInterval)
            })

        }, duration / 100)
        return () => clearInterval(progressInterval);
    }, [duration, activeIndex]);

    useEffect(() => {
        setProgress(0)
    }, [activeIndex])

    return (
        <div
            className={'bg-white rounded-md bg-opacity-50 cursor-pointer'}
            style={{height: '10px', width: `${statusItemWidth}`}}>
            {(activeIndex === index) && (
                <div
                    className="bg-white h-full rounded-md cursor-pointer"
                    style={{width: `${progress}%`}}>

                </div>
            )}
        </div>
    );
};

export default ProgressBar;
