var kafka = require('kafka-node');
var client = new kafka.KafkaClient();
const config  = require('./config');
require('dotenv').config();

const topicToCreate = [{
  topic: config.KafkaTopic,
  partitions: 1,
  replicationFactor: 2
}
];

client.createTopics(topicToCreate, (error, result) => {
  // result is an array of any errors if a given topic could not be created
  console.log(result, 'result');
});
