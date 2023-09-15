import React, {useRef, useState} from 'react';
import {BsEmojiSmile, BsMicFill} from "react-icons/bs";
import {ImAttachment} from "react-icons/im";

const MessageInput = () => {
    const [content, setContent] = useState('');
    const textareaRef = useRef(null);

    const handleChange = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };


    const onInputChange = (e) => {
        setContent(e.target.value)
        handleChange();
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log("enter pressed")
        }
    }
    return (
        <div className="bg-[#e8e9ec] flex gap-10 p-8 items-center">
            <div className="flex text-3xl gap-10 items-center">
                <BsEmojiSmile className="cursor-pointer"/>
                <ImAttachment className="cursor-pointer"/>
            </div>
            <textarea
                ref={textareaRef}
                className="outline-none border-none bg-white p-4 resize-none rounded-md flex-grow"
                placeholder="Type message"
                value={content}
                rows="1"
                style={{maxHeight: "100px"}}
                onChange={onInputChange}
                onKeyPress={handleKeyPress}
            ></textarea>
            <BsMicFill className="cursor-pointer text-3xl"/>
        </div>);
};

export default MessageInput;
