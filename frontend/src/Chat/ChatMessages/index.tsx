import React, {RefObject} from "react";

export interface Message {
    text: string;
    user: boolean
}

interface ChatMessagesProps {
    messages: Message[];
    messagesEndRef: RefObject<HTMLDivElement | null>;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({messages, messagesEndRef}) => {
    return (
        <div className="flex-1 p-6 overflow-y-auto space-y-3 bg-gray-50 rounded-t-3xl">
            {messages.length === 0 && (
                <div className="text-gray-400 text-center mt-20">Nenhuma mensagem ainda</div>
            )}
            {messages.map((msg, idx) => (
                <div
                    key={idx}
                    className={`max-w-[75%] px-4 py-2 rounded-3xl break-words shadow-md transition-colors duration-300 ${
                        msg.user
                            ? "bg-indigo-500 text-white self-end hover:bg-indigo-600"
                            : "bg-gray-200 text-gray-800 self-start hover:bg-gray-300"
                    }`}
                >
                    {msg.text}
                </div>
            ))}
            <div ref={messagesEndRef}/>
        </div>
    )
}