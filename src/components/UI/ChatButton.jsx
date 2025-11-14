import {useState} from 'react';
import { FaComments, FaTimes, FaWhatsapp, FaEnvelope, FaPhone} from 'react-icons/fa';
import {motion, AnimatePresence} from 'framer-motion';

const ChatButton=() =>{
    const [isOpen, setIsOpen] = useState(false);

    const contactOptions=[
        {
            icon: FaWhatsapp,
            label: "WhatsApp",
            color: "bg-green-500 hover:bg-green-600",
            link: "https://wa.me/971563829891", // Replace with actual number
          },
          {
            icon: FaEnvelope,
            label: "Email",
            color: "bg-blue-500 hover:bg-blue-600",
            link: "mailto:info@@asia-petrochem.com", // Replace with actual email
          },
          {
            icon: FaPhone,
            label: "Call Us",
            color: "bg-purple-500 hover:bg-purple-600",
            link: "tel:+971563829891", // Replace with actual number
          },
    ];
    return (
        <div className='fixed bottom-6 right-6 z-50'>
                  <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 w-64 border border-gray-200 dark:border-gray-700"
          >
            <div className="mb-3">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Chat with Sales
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Choose your preferred contact method
              </p>
            </div>
            
            <div className="space-y-2">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${option.color} text-white px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md`}
                >
                  <option.icon size={18} />
                  <span className="text-sm font-medium">{option.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  {/* Toggle Button */}
  <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-blue-600 hover:bg-blue-700"
        } text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaComments size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

        </div>
    )
}

export default ChatButton;