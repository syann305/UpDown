const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { voteType } = JSON.parse(event.body);
    const filePath = path.resolve(__dirname, 'votes.json');
    const votes = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (voteType === 'upvote') votes.upvotes += 1;
    else if (voteType === 'downvote') votes.downvotes += 1;

    fs.writeFileSync(filePath, JSON.stringify(votes));

    return {
        statusCode: 200,
        body: JSON.stringify(votes),
    };
};
