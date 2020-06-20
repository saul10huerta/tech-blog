const { Post } = require('../models');

const postData = [
  {
    title: 'Post1',
    content: 'Post 1 information',
    user_id: 1
  },
  {
    title: 'Post2',
    content: 'Post 12 information',
    user_id: 1
  },
  {
    title: 'Post3',
    content: 'Post 3 information',
    user_id: 2
  },
  {
    title: 'Post4',
    content: 'Post 4 information',
    user_id: 3
  },
  {
    title: 'Post5',
    content: 'Post 5 information',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
