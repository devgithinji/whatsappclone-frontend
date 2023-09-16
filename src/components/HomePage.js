import React, {useEffect, useState} from 'react';
import {chats as chatsData} from "../utils/data";
import DefaultChat from "./DefaultChat";
import ActiveChat from "./ActiveChat";
import './HomePage.css'
import ChatList from "./ChatList";
import Profile from "./profile/Profile";
import StatusList from "./status/StatusList";
import MyStatusList from "./status/MyStatusList";
import StatusView from "./status/StatusView";
import AddGroupParticipants from "./group/AddGroupParticipants";
import NewGroup from "./group/NewGroup";

const HomePage = () => {
    const [query, setQuery] = useState('');
    const [chats, setChats] = useState([])
    const [activeChat, setActiveChat] = useState(null);
    const [activeScreenLeft, setActiveScreenLeft] = useState('chat');
    const [activeScreenRight, setActiveScreenRight] = useState('default');
    const [statusView, setStatusView] = useState(false);
    const [createGroup, setCreateGroup] = useState(false)

    useEffect(()=>{
        setChats(chatsData)
    }, [])

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setActiveChat(null)
            }
        };

        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);


    const switchToStatusList = () => {
        setActiveScreenLeft('status');
        setActiveScreenRight('status')
    }

    const switchToDefault = () => {
        setActiveScreenLeft('chat')

        activeChat ? setActiveScreenRight('chat') : setActiveScreenRight('default')
    }

    const onSelectChat = (chat) => {
        setActiveChat(chat);
        setActiveScreenRight('chat')
    }

    const switchToStatusView = () => {
        setStatusView(true)
    }

    const createNewGroup = () => {

    }


    return (
        <div className="relative h-[100vh]">
            {statusView && <StatusView onCloseStatusView={() => setStatusView(false)}/>}
            <div className="w-full py-14 bg-[#00a884] -z-10 fixed"></div>
            <div className="grid place-items-center h-full">
                <div className="flex bg-[#f0f2f5] h-[90vh]  w-[90%] shadow-md">
                    <div className="left w-[30%] bg-[#e8e9ec] h-full">
                        {activeScreenLeft === 'chat' &&
                            <ChatList
                                chats={chats} onSelectChat={onSelectChat}
                                query={query}
                                setQuery={setQuery}
                                setProfileView={() => setActiveScreenLeft('profile')}
                                createGroup={() => setActiveScreenLeft('add-group-participants')}
                                setStatusView={switchToStatusList}/>
                        }
                        {activeScreenLeft === 'profile' && <Profile navigateBack={() => setActiveScreenLeft('chat')}/>}
                        {activeScreenLeft === 'status' && <StatusList statusView={switchToStatusView}/>}
                        {activeScreenLeft === 'add-group-participants' &&
                            <AddGroupParticipants navigateBack={switchToDefault} contacts={chats}
                                                  isCreateGroupMode={createGroup}
                                                  createGroup={() => setCreateGroup(true)}/>}
                        {createGroup &&
                            <NewGroup navigateBack={() => setCreateGroup(false)} createGroup={createNewGroup}/>}
                    </div>
                    <div className="right w-full">
                        <div className="w-full h-full">
                            {
                                activeScreenRight === 'default' && <DefaultChat/>
                            }
                            {
                                (activeScreenRight === 'chat' && activeChat) && <ActiveChat {...activeChat}/>
                            }
                            {
                                activeScreenRight === 'status' && <MyStatusList onCloseStatusList={switchToDefault}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
