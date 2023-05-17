const {User} = require('../models');

const userData = [
    {
        username: 'JeremyCodes',
        email: 'JeremyCodes@gmail.com',
        password: 'password1234'
    },
    {
        username: 'Jorgen',
        email:'Jorgen@gmail.com',
        password:'123456'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

