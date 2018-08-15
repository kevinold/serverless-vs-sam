const aws = require("aws-sdk");
const dynamodb = new aws.DynamoDB.DocumentClient();

exports.handler = async event => {
  console.log(event);
  const params = {
    TableName: process.env.DynamoDBTableName
  };
  const data = await dynamodb.scan(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ data })
  };
};
