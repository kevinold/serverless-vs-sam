const aws = require("aws-sdk");
const sns = new aws.SNS();

exports.handler = (event, context, callback) => {
  try {
    console.log(JSON.stringify(event.Records));
    event.Records.forEach(function(record) {
      const key = record.s3.object.key;

      // example key: image-XXX.png
      const dotIndex = key.lastIndexOf(".");
      const id = key.substring(6, dotIndex);

      const params = {
        Message: `The image with ID '${id}' was succesfully generated`,
        TopicArn: process.env.SNSTopicARN
      };

      sns.publish(params, function(err, data) {
        callback(null, "");
      });
    });
  } catch (error) {
    consol.log(error);
  }
};
