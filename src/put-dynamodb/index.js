const aws = require("aws-sdk");
const dynamodb = new aws.DynamoDB().DocumentClient();

exports.handler = event => {
  const params = {
    TableName: process.env.DynamoDBTableName,
    Item: {
      id: {
        N: event.pathParameters["id"]
      },
      status: {
        S: "New"
      }
    }
  };

  return dynamodb.putItem(params).promise();
};
