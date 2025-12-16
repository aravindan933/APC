import { useState, useEffect } from "react";

const WhatsAppAssistant = () => {
  const [open, setOpen] = useState(false);

  // Automatically show the chat bubble after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(
      "https://wa.me/971508995667?text=Hello%20Asia%20Petrochem,%20I%20would%20like%20to%20connect%20with%20Sales.",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-2">
      {/* Chat bubble */}
      {open && (
        <div
          className="bg-white text-gray-800 px-4 py-3 rounded-xl shadow-lg text-sm flex items-center gap-2 max-w-xs animate-slideIn cursor-pointer"
          onClick={handleClick}
        >
          <img src="/img/whats.png" alt="WhatsApp" className="w-5 h-5" />
          <div>
            <p className="font-semibold">Hi! Welcome to Asia Petrochem</p>
            <p className="text-xs text-gray-600">
              Click here to connect with Sales or support.
            </p>
          </div>
        </div>
      )}

      {/* Floating logo */}
      <button
        onClick={handleClick}
        className="w-14 h-14 bg-[white] rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <img src="/img/whats2.jpg" alt="WhatsApp" className="w-7 h-7" />
      </button>
    </div>
  );
};

export default WhatsAppAssistant;
