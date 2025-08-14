import React, {useEffect, useRef, useState} from "react";
import {ChatInput} from "./ChatInput";
import {ChatMessages, Message} from "./ChatMessages";
import {postEnviarMensagem} from "../servicos/mensagens";
import {socket} from "../servicos/socket.io";
import {CONSTANTS} from "../constants/chat";

interface SocketIoMessageObject {
    chatId: string;
    mensagem: string;
}

export const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const chatId = Math.random().toString(36).substr(2);

    const scrollToBottom = () => {
        // @ts-ignore
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        socket.on(CONSTANTS.CHAT.EVENT_RECEBER_MENSAGEM, (data: SocketIoMessageObject) => {
            setMessages(oldValues => [...oldValues, {text: data.mensagem, user: data.chatId == chatId}])
        })

        return () => {
            socket.off("receive_message");
        };
    }, []);

    const onSubmit = async (mensagem: string) => {
        if (!mensagem.trim()) return;

        await postEnviarMensagem(mensagem, chatId)
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-500 to-indigo-600 p-4">
            <div
                className="flex flex-col bg-white rounded-3xl shadow-2xl w-full max-w-md min-h-[500px] h-full md:h-auto"
            >
                <ChatMessages
                    messages={messages}
                    messagesEndRef={messagesEndRef}
                />

                <ChatInput
                    onSubmit={onSubmit}
                />
            </div>
        </div>)
}