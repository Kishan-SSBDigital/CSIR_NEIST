import React, { useState, useRef, useEffect } from 'react';
import { X, MessageSquare, Send, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import Button from './ui/Button';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! I'm your government services assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      let response = '';
      
      // Simple keyword-based responses
      const lowercaseInput = input.toLowerCase();
      
      if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
        response = "Hello! How can I assist you with government services today?";
      } else if (lowercaseInput.includes('passport')) {
        response = "For passport services, you can visit the Citizen Services section. Would you like me to provide the direct link?";
      } else if (lowercaseInput.includes('tax') || lowercaseInput.includes('taxes')) {
        response = "For tax filing and payment services, please visit the Tax Services section. You can file your returns online and access tax-related information.";
      } else if (lowercaseInput.includes('business') || lowercaseInput.includes('company')) {
        response = "For business registration and related services, check out the Business Services section. You can register a new business, renew licenses, and more.";
      } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('help')) {
        response = "You can contact us through the Contact Us page. Alternatively, you can call our helpline at +91 1234 567 890 or email us at info@example-gov.org.";
      } else {
        response = "Thank you for your message. How else can I assist you with government services today?";
      }
      
      const botMessage: ChatMessage = {
        id: Date.now(),
        text: response,
        sender: 'bot',
        timestamp: new Date().toISOString(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all z-40"
        aria-label="Open chat assistant"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden z-50 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Bot size={20} className="mr-2" />
            <h3 className="font-medium">Government Assistant</h3>
          </div>
          <button
            onClick={toggleChat}
            className="text-white hover:text-blue-200"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 bg-slate-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-700 text-white rounded-br-none'
                    : 'bg-white text-slate-800 rounded-bl-none shadow'
                }`}
              >
                <p>{message.text}</p>
              </div>
              <div
                className={`text-xs mt-1 text-slate-500 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                {new Date(message.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center text-slate-500 text-sm">
              <div className="flex space-x-1 ml-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            aria-label="Type your message"
          />
          <Button
            type="submit"
            variant="primary"
            className="rounded-l-none"
            aria-label="Send message"
          >
            <Send size={18} />
          </Button>
        </form>
      </div>
    </>
  );
};

export default AIAssistant;