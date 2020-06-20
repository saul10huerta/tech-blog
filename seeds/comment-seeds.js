const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Comment1',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Comment2',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Comment3',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'Comment4',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'Comment5',
    user_id: 4,
    post_id: 4
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
