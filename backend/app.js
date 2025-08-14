import express from 'express';
import http from "http";
import {Server} from "socket.io";
import {channel} from "./rabbitmq.js"
import {RABBITMQ_QUEUE_MENSAGENS} from "./constants.js";
import cors from "cors";

const app = express();
const server = http.createServer(app)
const io = new Server(server, {cors: {origin: "*"}});

app.use(cors({
    origin: ["http://localhost:3000"], methods: ["*"],
}));
app.use(express.json());

app.post("/enviar-mensagem", (req, res) => {
    const {mensagem, chatId} = req.body;

    if (!mensagem) {
        return res.status(400).send("Mensagem obrigatória");
    }

    channel.sendToQueue(RABBITMQ_QUEUE_MENSAGENS, Buffer.from(JSON.stringify({mensagem, chatId})));
    return res.status(204).json();
})

export { io, server }