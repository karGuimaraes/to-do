const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { taskId } = event.pathParameters;

    const params = {
        TableName: 'Tasks',
        Key: {
            taskId
        }
    };

    try {
        await dynamoDB.delete(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify('Task deleted successfully')
        };
    } catch (error) {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: 'Failed to delete task' })
        };
    }
};