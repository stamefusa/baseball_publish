var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  body = req.query.action;

  const AWS = require('aws-sdk');
  if (!process.env.AWS_ACCESS_KEY_ID && !process.env.AWS_SECRET_ACCESS_KEY) {
    AWS.config.loadFromPath('./config.json');
  }
  var sqs = new AWS.SQS({
      apiVersion: '2012-11-05',
      region: 'ap-northeast-1'
      //region: 'us-east-1'
  });
  var params = {
      DelaySeconds: 0,
      MessageBody: body,
      QueueUrl: "https://sqs.ap-northeast-1.amazonaws.com/560746380060/baseball"
      //QueueUrl: "https://sqs.us-east-1.amazonaws.com/560746380060/baseball"
  };

  sqs.sendMessage(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
      res.json(data);
    }
  });

  //res.json(json_example);
});

module.exports = router;
