import { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext();

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  // Load chat history from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  const sendMessage = (text, sender = 'user') => {
    const newMessage = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate bot response
    if (sender === 'user') {
      setIsTyping(true);
      setTimeout(() => {
        const botResponse = getBotResponse(text);
        const botMessage = {
          id: Date.now() + 1,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return 'Thank you for your inquiry. Our sales team will contact you shortly with pricing information. You can also reach us at info@asia-petrochem.com or +971 4 2384533.';
    }
    if (lowerMessage.includes('product') || lowerMessage.includes('catalog')) {
      return 'We offer a wide range of products including acetates, base oils, solvents, lubricants, and more. Please visit our Products section or contact our team for detailed information.';
    }
    if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping')) {
      return 'We provide delivery services across the Middle East, Africa, and the Indian Subcontinent. Please contact our logistics team for delivery schedules and options.';
    }
    if (lowerMessage.includes('certificate') || lowerMessage.includes('quality')) {
      return 'We maintain ISO 9001, ISO 14001, and ISO 45001 certifications. You can view all our certificates in the Certificates section of our website.';
    }
    if (lowerMessage.includes('msds') || lowerMessage.includes('safety')) {
      return 'All MSDS and TDS documents are available in our MSDS/TDS Viewer section. You can search and download documents for all our products.';
    }
    
    return 'Thank you for contacting Asia Petrochem. Our team will get back to you shortly. For immediate assistance, please call +971 4 2384533 or email info@asia-petrochem.com.';
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        setIsOpen,
        messages,
        sendMessage,
        isTyping,
        clearChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

