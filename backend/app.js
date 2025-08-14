import express from 'express';
import http from "http"
import {Server} from "socket.io";
import {channel } from "./rabbitmq.js"
import {RABBITMQ_QUEUE_MENSAGENS} from "./constants.js";

const app = express();
const server = http.createServer(app)
const io = new Server(server, {cors: {origin: "*"}});

app.use(express.json());

app.post("/enviar-mensagem", (req, res) => {
    const {mensagem} = req.body;

    if (!mensagem) {
        return res.status(400).send("Mensagem obrigatória");
    }

    channel.sendToQueue(RABBITMQ_QUEUE_MENSAGENS, Buffer.from(mensagem));
    return res.status(204).json();
})

export { io, server }