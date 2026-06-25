'use client';

import { MessageCircle } from "lucide-react";

// Replace this with your actual WhatsApp number (include country code without +)
const WHATSAPP_NUMBER = "917477680686";

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={handleWhatsAppClick}
        className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
      </button>
    </div>
  );
}
