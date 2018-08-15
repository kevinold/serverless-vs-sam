const aws = require("aws-sdk");
const dynamodb = new aws.DynamoDB.DocumentClient();

exports.handler = async event => {
  console.log(event);
  const params = {
    TableName: process.env.DynamoDBTableName,
    Item: {
      id: event.pathParameters["id"],
      name: "test"
    }
  };

  const data = await dynamodb.put(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify({ data })
  };
};
