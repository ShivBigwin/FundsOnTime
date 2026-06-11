// components/ChatBot.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello! I'm Goku. How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!inputText.trim()) return;

        const userMessage: Message = {
            id: messages.length + 1,
            text: inputText,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages([...messages, userMessage]);
        setInputText('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "I understand. Can you tell me more about that?",
                "That's interesting! Let me help you with that.",
                "I can assist you with that. What specific information do you need?",
                "Thanks for sharing! How else can I help you?",
                "I'm here to help! Is there anything specific you'd like to know?",
            ];

            const botMessage: Message = {
                id: messages.length + 2,
                text: responses[Math.floor(Math.random() * responses.length)],
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <motion.button
                    onClick={() => setIsOpen(true)}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative"
                >
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                        <span className="text-white text-2xl">💬</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 border-2 border-white animate-ping shadow-sm" />
                </motion.button>
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed bottom-24 right-6 w-96 h-[500px] z-50"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col h-full">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 text-gray-800">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <Bot size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">AI Assistant</h3>
                                            <p className="text-sm text-blue-100">Online • Ready to help</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Messages Container */}
                            <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
                                <div className="space-y-4">
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[80%] rounded-2xl p-4 ${message.sender === 'user'
                                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-800 rounded-br-none'
                                                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                                                    }`}
                                            >
                                                <div className="flex items-center space-x-2 mb-1">
                                                    {message.sender === 'bot' ? (
                                                        <Bot size={14} className="text-gray-500" />
                                                    ) : (
                                                        <User size={14} className="text-blue-200" />
                                                    )}
                                                    <span className="text-xs opacity-75">
                                                        {message.timestamp.toLocaleTimeString([], {
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                        })}
                                                    </span>
                                                </div>
                                                <p className="whitespace-pre-wrap">{message.text}</p>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-gray-100 rounded-2xl rounded-bl-none p-4">
                                                <div className="flex space-x-2">
                                                    <motion.div
                                                        animate={{ y: [0, -4, 0] }}
                                                        transition={{ repeat: Infinity, duration: 0.6 }}
                                                        className="w-2 h-2 bg-gray-400 rounded-full"
                                                    />
                                                    <motion.div
                                                        animate={{ y: [0, -4, 0] }}
                                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.1 }}
                                                        className="w-2 h-2 bg-gray-400 rounded-full"
                                                    />
                                                    <motion.div
                                                        animate={{ y: [0, -4, 0] }}
                                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                                                        className="w-2 h-2 bg-gray-400 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="border-t border-gray-200 p-4 bg-white text-gray-800">
                                <div className="flex space-x-2">
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            value={inputText}
                                            onChange={(e) => setInputText(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Type your message here..."
                                            className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        {inputText && (
                                            <button
                                                onClick={() => setInputText('')}
                                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                            >
                                                <X size={18} />
                                            </button>
                                        )}
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleSend}
                                        disabled={!inputText.trim() || isTyping}
                                        className="px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {isTyping ? (
                                            <Loader2 size={20} className="animate-spin" />
                                        ) : (
                                            <Send size={20} />
                                        )}
                                    </motion.button>
                                </div>
                                <p className="text-xs text-gray-400 text-center mt-2">
                                    Press Enter to send • Shift + Enter for new line
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}