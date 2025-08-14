import axios from "axios";


export const postEnviarMensagem = (mensagem: string, chatId: string) => {
    return axios.post("http://localhost:4000/enviar-mensagem", {
        mensagem,
        chatId
    });
}