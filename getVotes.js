const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    const filePath = path.resolve(__dirname, 'votes.json');
    const votes = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return {
        statusCode: 200,
        body: JSON.stringify(votes),
    };
};
