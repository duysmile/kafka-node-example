# kafka-nodejs

## Install kafka
Download from [here](https://kafka.apache.org/downloads)

## Run zookeeper
> bin/zookeeper-server-start.sh config/zookeeper.properties

## Run server (broker)
> bin/kafka-server-start.sh config/server.properties

## Create topic
> bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test

## Send message
- Using command line
> bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test
> message 1

- Using nodejs
> node producer.js

## Consume message
- Using command line
> bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning

- Using nodejs
> node consumer.js