import React from 'react';

const DefaultChat = () => {
    return (
      <div className="w-full h-full grid place-content-center">
          <div className="w-[70%] mx-auto text-center flex flex-col gap-10 justify-center">
              <img src="/images/mainchaticon.png" className="h-2/5 object-contain" alt=""/>
              <h1 className="text-4xl text-gray-600">Whatsapp Web</h1>
              <p>send and receive message without keeping your phone online. Use
                  whatsapp on up to 4
                  linked devices and 1 phone at the same time</p>
          </div>
      </div>
    );
};

export default DefaultChat;
