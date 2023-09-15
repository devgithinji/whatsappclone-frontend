import React from 'react';

const Chats = () => {
    return (
        <div className="flex-grow flex flex-col gap-3 py-5 px-10">
            <div className="bg-white  p-3 rounded-md flex flex-col gap-5" style={{maxWidth: '350px'}}>
                <div
                    className="break-all">
                    The longest word in any of the major English language dictionaries is
                    pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from
                    the inhalation of very fine silica particles, specifically from a volcano;
                </div>
                <div className="text-xs self-end">10:50</div>
            </div>
            <div className="bg-[#fef3c7] w-max p-3 rounded-md self-end flex flex-col gap-5" style={{maxWidth: '350px'}}>
                <div className="break-all">
                    The longest word in any of the major English language dictionaries is
                    pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung
                </div>
                <div className="text-xs self-end">10:50</div>
            </div>
            <div className="bg-white  p-3 rounded-md flex flex-col gap-5" style={{maxWidth: '350px'}}>
                <div className="break-all">
                    The longest word in any of the major English language dictionaries is
                    pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung
                </div>
                <div className="text-xs self-end">10:50</div>
            </div>

        </div>
    );
};

export default Chats;
