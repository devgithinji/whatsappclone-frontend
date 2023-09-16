import React, {useState} from 'react';
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import ContactItem from "./ContactItem";
import SelectedContact from "./SelectedContact";

const AddGroupParticipants = ({navigateBack, contacts, createGroup, isCreateGroupMode}) => {
    const [filteredParticipants, setFilteredParticipants] = useState([...contacts])
    const [name, setName] = useState('')
    const [participants, setParticipants] = useState([])

    const removeParticipant = (participant) => {
        const newParticipants = participants.filter(part => part.id !== participant.id);
        setParticipants(newParticipants);
        setFilteredParticipants([...filteredParticipants, participant])
    }

    const addParticipants = (contact) => {
        const newFilteredPart = filteredParticipants.filter(part => part.id !== contact.id)
        console.log(newFilteredPart)
        setFilteredParticipants(newFilteredPart)
        setParticipants([...participants, contact])
    }

    return (
        <div className={isCreateGroupMode ? 'hidden' : 'w-full flex flex-col h-full'}>
            <div className="flex items-center space-x-10 bg-[#008069] text-white py-5 px-3">
                <BsArrowLeft onClick={navigateBack} className="cursor-pointer text-3xl font-bold"/>
                <p className="cursor-pointer font-semibold">Add Group Participants</p>
            </div>
            <div className="w-full p-3">
                <div className="flex flex-wrap gap-2">
                    {
                        participants.map((participant, index) => <SelectedContact
                            key={participant.id}
                            username={participant.username}
                            onRemoveContact={() => removeParticipant(participant)}
                            profilePic={participant.profilePic}/>
                        )
                    }
                </div>
                <input
                    className="w-full outline-none border-b-2 border-gray-500 p-2 bg-transparent"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter contact name"/>
            </div>
            <div className="flex-grow overflow-y-scroll">
                {
                    filteredParticipants.map((contact, index) => <ContactItem
                        onClick={() => addParticipants(contact)}
                        key={contact.id} {...contact}/>
                    )
                }
            </div>
            {
                participants.length > 0 && (
                    <div className="grid place-content-center py-10 shadow-md bg-[#008069]">
                        <div className="rounded-full bg-green-600 grid place-content-center"
                             style={{height: '50px', width: '50px'}}>
                            <BsArrowRight onClick={createGroup} className="text-white text-3xl font-bold cursor-pointer"/>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AddGroupParticipants;
