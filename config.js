require('dotenv').config();

const config = {
  KafkaHost:process.env.KAFKA_HOST,
  KafkaTopic: process.env.KAFKA_TOPIC_NAME
};

module.exports = config;

