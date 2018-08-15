const aws = require("aws-sdk");
const dynamodb = new aws.DynamoDB.DocumentClient();

exports.handler = event => {
  const params = {
    TableName: process.env.DynamoDBTableName
  };

  return dynamodb.scan(params).promise();
};
