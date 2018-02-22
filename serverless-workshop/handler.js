'use strict';
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.saveEmail = (event, context, callback) => {
	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Go Serverless v1.0! Your function executed successfully!',
		})
	};
	if (event && event.pathParameters.email) {
		const params = {
			TableName: process.env.DYNAMODB_TABLE,
			Item: {
				email: event.pathParameters.email
			}
		};
		dynamo.put(params, function(error) {
			if (error) callback(error);
			else callback(null, response);
		});
	} else callback('No email was provided.');
};
