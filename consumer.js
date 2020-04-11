const kafka = require('kafka-node');
const config = require('./config');

try {
    const Consumner = kafka.Consumer;
    const client = new kafka.KafkaClient(config.kafka_server);
    let consumer = new Consumner(
        client,
        [{
            topic: config.kafka_topic,
            partition: 0,
        }],
        {
            autoCommit: true,
            fetchMaxBytes: 1024 * 1024,
            fetchMaxWaitMs: 1000,
            encoding: 'utf8',
            fromOffset: false,
        }
    );

    consumer.on('message', async function(message) {
        console.log('message', message);
    });

    consumer.on('error', err => {
        console.error('error', err);
    })
} catch (error) {
    console.error(error);
}
