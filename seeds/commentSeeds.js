const {Comment} = require('../models');

const commentData = [
    {
        content: 'This post rocks!',
        user_id: '1',
        post_id: '1',
    },
    {
        content: 'WOW UR SO SMART!',
        user_id: '2',
        post_id: '2',
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;