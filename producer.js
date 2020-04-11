const kafka = require('kafka-node');
const config = require('./config');

try {
    const Producer = kafka.Producer;
    const client = new kafka.KafkaClient(config.kafka_server);
    const producer = new Producer(client);
    const kafkaTopic = config.kafka_topic;
    let payload = [
        {
            topic: kafkaTopic,
            messages: 'message 1',
        },
    ]
    producer.on('ready', function() {
        producer.send(payload, (err, data) => {
            if (err) {
                console.error('send error', err);
            } else {
                console.log('success', data);
            }
        });
        producer.send(payload, (err, data) => {
            if (err) {
                console.error('send error', err);
            } else {
                console.log('success', data);
            }
        });
    });

    producer.on('error', err => {
        console.error('error', err);
    });
} catch (error) {
    console.error(error);
}
