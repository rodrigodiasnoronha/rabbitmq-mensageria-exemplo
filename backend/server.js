import express from 'express';
import {channel, connection} from "./rabbitmq.js"
import {RABBITMQ_QUEUE_MENSAGENS} from "./constants.js";

const app = express();
app.use(express.json());

app.post("/enviar-mensagem", (req, res) => {
    const { mensagem } = req.body;

    if (!mensagem) {
        return res.status(400).send("Mensagem obrigatória");
    }

    channel.sendToQueue(RABBITMQ_QUEUE_MENSAGENS, Buffer.from(mensagem));

    return res.status(204);
})


app.listen(4000, () => console.log("Server started on port 4000"));