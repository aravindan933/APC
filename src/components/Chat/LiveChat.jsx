import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes } from 'react-icons/fa';
import { useChat } from '../../context/ChatContext';
import ChatWindow from './ChatWindow';

const LiveChat = () => {
  const { isOpen, setIsOpen } = useChat();
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show chat bubble after 3 seconds
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Chat Bubble */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-24 right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 max-w-xs z-40 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <FaComments />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Need help?
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Chat with our team for instant support
                </p>
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setShowBubble(false);
                  }}
                  className="mt-2 text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition-colors"
                >
                  Start Chat
                </button>
              </div>
              <button
                onClick={() => setShowBubble(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close bubble"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBubble(false);
        }}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-40 flex items-center justify-center text-white transition-colors ${
          isOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaComments className="text-xl" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>{isOpen && <ChatWindow />}</AnimatePresence>
    </>
  );
};

export default LiveChat;

