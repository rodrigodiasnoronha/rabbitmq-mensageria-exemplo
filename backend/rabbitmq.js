import amqp from "amqplib"
import {RABBITMQ_QUEUE_MENSAGENS, RABBITMQ_URL} from "./constants.js";

let channel, connection;
const queue = RABBITMQ_QUEUE_MENSAGENS;

async function connectRabbitMQ() {
    connection = await amqp.connect(RABBITMQ_URL); // se usar docker-compose
    channel = await connection.createChannel();
    await channel.assertQueue(queue, {durable: true});
}

connectRabbitMQ();

export {channel, connection}