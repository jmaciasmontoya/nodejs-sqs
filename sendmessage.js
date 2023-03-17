// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Create an SQS service object
var sqs = new AWS.SQS({
    apiVersion: '2012-11-05',
    accessKeyId: "reemplaza-tu-access-KEY-ID",
    secretAccessKey: "reemplaza-tu-SECRET-ACCESS-KEY",
    region:"us-east-1"
});


var params = {
   // Remove DelaySeconds parameter and value for FIFO queues
  DelaySeconds: 10,
  MessageAttributes: {
    "Title": {
      DataType: "String",
      StringValue: "The Whistler"
    },
    "Author": {
      DataType: "String",
      StringValue: "John Grisham"
    },
    "WeeksOn": {
      DataType: "Number",
      StringValue: "6"
    }
  },
  MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016.",
  // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
  // MessageGroupId: "Group1",  // Required for FIFO queues
  QueueUrl: "reemplaza-la-URL-de-la-cola"
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});
