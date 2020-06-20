const { User } = require('../models');

const userData = [
  {
    username: 'Hello1',
    password: 'hello1'
  },
  {
    username: 'Hello2',
    password: 'hello2'
  },
  {
    username: 'Hello3',
    password: 'hello3'
  },
  {
    username: 'Hello4',
    password: 'hello4'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
