import {en, Faker} from '@faker-js/faker'

import React from 'react';
import moment from "moment";

const faker = new Faker({
    locale: [en]
});
export const chats = () => {
    const chats = [];

    for (let i = 0; i < 20; i++) {
        const chat = {
            id: i + 1,
            username: faker.internet.userName(),
            shortMessage: faker.lorem.sentence(10),
            timestamp: faker.date.recent({days: 10}).toLocaleString(),
            unreadMessages: Math.floor(Math.random() * 10),
            profilePic: faker.internet.avatar()
        }

        chats.push(chat);

    }

    return chats.sort((a, b) => moment(b.timestamp).diff(a.timestamp));
};

export const stories = () => {
    const stories = [];
    for (let i = 0; i < 20; i++) {
        stories.push(faker.image.urlLoremFlickr())
    }
    return stories
}





