require('dotenv').config();

const config = {
  KafkaHost:process.env.KAFKA_HOST,
  KafkaTopic: process.env.KAFKA_TOPIC
};

module.exports = config;

