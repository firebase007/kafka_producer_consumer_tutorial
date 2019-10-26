const kafka = require('kafka-node');
const config  = require('./config');

const client = new kafka.KafkaClient({kafkaHost: config.KafkaHost});



const topicToCreate = [{
  topic: config.KafkaTopic,
  partitions: 1,
  replicationFactor: 1
}
];

client.createTopics(topicToCreate, (error, result) => {
  // result is an array of any errors if a given topic could not be created
  console.log(result, 'topic created successfully');
});
