import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 


export const Whats = () => {
  return (
    <div
      className="fixed bottom-0 right-0 z-50 p-4"
      style={{
        marginBottom: '20px', 
      }}
    >
 
      <a
        href="https://api.whatsapp.com/send/?phone=919667117769&text=Hi&type=phone_number&app_absent=0" // Replace with your WhatsApp number
        
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={60} className="text-green-500 hover:text-green-600" />
      </a>
    </div>
  );
};
