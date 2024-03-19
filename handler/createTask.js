const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { taskId, taskName } = JSON.parse(event.body);

  const params = {
    TableName: 'Tasks',
    Item: {
      taskId,
      taskName
    }
  };

  try {
    await dynamoDB.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify('Task created successfully')
    };
  } catch (error) {
    return {
      statusCode: 409,
      body: JSON.stringify({ error: 'Failed to create task ' + error })
    };
  }
};