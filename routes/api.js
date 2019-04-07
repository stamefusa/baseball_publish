var express = require('express');
var router = express.Router();

var json_example = [
    {
        "id": "1",
        "name": "example_json_1",
    },{
        "id": "2",
        "name": "example_json_2"
    }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  const AWS = require('aws-sdk');
  AWS.config.loadFromPath('./config.json');
  var sqs = new AWS.SQS({
      apiVersion: '2012-11-05',
      region: 'us-east-1'
  });
  var params = {
      DelaySeconds: 0,
      MessageBody: "test",
      QueueUrl: "https://sqs.us-east-1.amazonaws.com/560746380060/baseball"
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
