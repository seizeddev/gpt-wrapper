'use client';

import { ArrowUp, ChevronLeft, ChevronRight, LogOut, MessageCircle } from "lucide-react";
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatPage() {
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const router = useRouter()

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!message.trim()) return;

        const newMessages = [...messages, { role: 'user' as const, content: message }];
        setMessages(newMessages);
        setMessage('');        
        setLoading(true);

        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }),
        });

        const data = await res.json();
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
        setLoading(false);
    };

    const handleLogout = async () => {
        await fetch('/auth/signout', {
        method: 'POST',
        })

        router.push('/login')
    }

    return (
        <div className="flex h-screen bg-white">
            <div
                className={`transition-all duration-300 h-full bg-white border-r text-black ${
                    sidebarOpen ? 'w-64' : 'w-16'
                }`}
            >
                <div className="flex items-center justify-between px-4 py-4">
                    {sidebarOpen ? (
                    <>
                        <h1 className="text-xl font-bold">CodeGPT</h1>
                        <button onClick={() => setSidebarOpen(false)}>
                        <ChevronLeft className="w-5 h-5" />
                        </button>
                    </>
                    ) : (
                    <button onClick={() => setSidebarOpen(true)} className="mx-auto">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    )}
                </div>

                <nav className={`p-2 space-y-4 flex flex-col items-center`}>
                    <button className="flex items-center gap-2 w-full px-2 py-2 hover:bg-gray-100 rounded">
                    <MessageCircle className="w-5 h-5" />
                    {sidebarOpen && <span className="text-sm">Chat</span>}
                    </button>

                    <button onClick={handleLogout} className="flex items-center gap-2 w-full px-2 py-2 hover:bg-gray-100 rounded">
                    <LogOut className="w-5 h-5" />
                    {sidebarOpen && <span className="text-sm">Logout</span>}
                    </button>
                </nav>
            </div>

            <div className="flex flex-1 flex-col bg-gray-50 shadow-inner">
                <div className="flex-1 overflow-y-auto flex justify-center px-4">
                    <div className="w-full max-w-3xl py-6 space-y-6">
                        {messages.length === 0 && (
                            <div className="text-center text-gray-500">
                                <h2 className="text-2xl font-semibold mb-2">Welcome to <b>Arcanes</b> CodeGPT</h2>
                                <p>How can I help you with your programming questions?</p>
                            </div>
                        )}
                        
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} scroll-mb-24`}
                            >
                                <div
                                    className={`relative max-w-xl rounded-lg px-4 py-3 ${
                                        msg.role === 'user'
                                            ? 'bg-black text-white'
                                            : 'bg-gray-100 text-gray-800'
                                    }`}
                                >
                                    <div className={`prose ${msg.role === 'user' ? 'prose-invert' : ''} max-w-none`}>
                                        <ReactMarkdown>
                                            {msg.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 rounded-lg px-4 py-3 text-gray-500">
                                    Thinking...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                <div className="border-t bg-white px-4 py-4 w-full flex justify-center">
                    <form
                        onSubmit={sendMessage}
                        className="w-full max-w-3xl flex items-end gap-4"
                    >
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                sendMessage();
                                }
                            }}
                            rows={1}
                            className="flex-1 resize-none rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
                            placeholder="Send a message..."
                            style={{ minHeight: '44px', maxHeight: '200px' }}
                        />

                        <button
                        type="submit"
                        disabled={loading || message.trim() === ''}
                        className="p-3 rounded-lg bg-black text-white hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                        <ArrowUp className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}