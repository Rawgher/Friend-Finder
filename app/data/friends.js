let faker = require("faker");

let newFriends = [

    {
        name: faker.name.findName(),
        photo: faker.image.imageUrl(),
        scores: [
            '1',
            '3',
            '1',
            '2',
            '4',
            '5',
            '3',
            '4',
            '1',
            '4'
        ]
    },
    {
        name: faker.name.findName(),
        photo: faker.image.imageUrl(),
        scores: [
            '2',
            '4',
            '5',
            '3',
            '2',
            '2',
            '5',
            '5',
            '2',
            '1'
        ]
    },
    {
        name: faker.name.findName(),
        photo: faker.image.imageUrl(),
        scores: [
            '2',
            '4',
            '2',
            '1',
            '5',
            '3',
            '3',
            '3',
            '3',
            '4'
        ]
    },
    {
        name: faker.name.findName(),
        photo: faker.image.imageUrl(),
        scores: [
            '1',
            '5',
            '1',
            '5',
            '5',
            '1',
            '1',
            '1',
            '1',
            '1'
        ]
    },
    {
        name: faker.name.findName(),
        photo: faker.image.imageUrl(),
        scores: [
            '2',
            '2',
            '2',
            '4',
            '3',
            '5',
            '5',
            '1',
            '2',
            '3'
        ]
    }

]; 

module.exports = newFriends;