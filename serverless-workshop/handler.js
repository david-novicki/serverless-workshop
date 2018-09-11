const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.saveEmail = async event => {
  if (!event || !event.pathParameters || !event.pathParameters.email)
    return new Error("No email was provided.");
  else {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        email: event.pathParameters.email
      }
    };
    return dynamoDb.put(params).promise();
  }
};
