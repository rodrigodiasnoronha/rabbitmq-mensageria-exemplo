import amqp from "amqplib";
import { RABBITMQ_QUEUE_MENSAGENS, RABBITMQ_URL, SOCKET_IO_MENSAGEM_EVENT } from "./constants.js";
import { io } from "./app.js";

let channel, connection;
const queue = RABBITMQ_QUEUE_MENSAGENS;

async function connectRabbitMQ() {
  if (connection && channel) return; // evita múltiplas conexões

  connection = await amqp.connect(RABBITMQ_URL);
  channel = await connection.createChannel();
  await channel.assertQueue(queue, { durable: true });

  channel.consume(
    queue,
    (buffer) => {
      const conteudo = buffer.content.toString();
      const data = JSON.parse(conteudo);

      channel.ack(buffer);
      io.emit(SOCKET_IO_MENSAGEM_EVENT, data); // envia para todos os clientes
    },
    { noAck: false }
  );

  console.log("Consumidor RabbitMQ conectado e ouvindo mensagens...");
}

connectRabbitMQ(); // chama uma vez ao iniciar o servidor

export { channel, connection };
