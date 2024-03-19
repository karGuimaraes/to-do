const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { taskId } = event.pathParameters;
    const { taskName } = JSON.parse(event.body);
    
    const params = {
        TableName: 'Tasks',
        Key: {
            taskId
        },
        UpdateExpression: 'set taskName = :n',
        ExpressionAttributeValues: {
            ':n': taskName
        },
        ReturnValues: 'UPDATED_NEW'
    };

    try {
        const data = await dynamoDB.update(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Attributes)
        };
    } catch (error) {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: 'Task not found' })
        };
    }
    
};