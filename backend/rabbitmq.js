import amqp from "amqplib"
import {RABBITMQ_QUEUE_MENSAGENS, RABBITMQ_URL, SOCKET_IO_MENSAGEM_EVENT} from "./constants.js";
import {io} from "./app.js"

let channel, connection;
const queue = RABBITMQ_QUEUE_MENSAGENS;

async function connectRabbitMQ() {
    connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
    await channel.assertQueue(queue, {durable: true});
    
    channel.consume(queue, (msg) => {
        if (msg) {
            const mensagem = msg.content.toString();
            channel.ack(msg);
            io.emit(SOCKET_IO_MENSAGEM_EVENT, mensagem)
        }
    }, {noAck: false});
}

connectRabbitMQ();

export {channel, connection}