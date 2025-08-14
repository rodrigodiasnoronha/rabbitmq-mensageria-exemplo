import React, {useState} from "react";

interface ChatInputProps {
    onSubmit: (message: string) => void
}

export const ChatInput: React.FC<ChatInputProps> = ({onSubmit}) => {

    const [input, setInput] = useState("");

    return (<div
        className="flex border-t border-gray-200 bg-white rounded-b-3xl shadow-inner"
    >
        <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="flex-1 p-4 outline-none rounded-bl-3xl placeholder-gray-400 text-gray-700"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button
            type="submit"
            className="bg-indigo-500 text-white px-6 font-semibold rounded-br-3xl hover:bg-indigo-600 transition-colors duration-300"
            onClick={() => onSubmit(input)}
        >
            Enviar
        </button>
    </div>)
}