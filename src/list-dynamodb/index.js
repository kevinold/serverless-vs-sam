const aws = require("aws-sdk");
const dynamodb = new aws.DynamoDB();

exports.handler = (event, context, callback) => {
  const params = {
    TableName: process.env.DynamoDBTableName
  };

  dynamodb.listTables({}, function(err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      body: err ? err.stack : ""
    };
    callback(null, response);
  });
};
