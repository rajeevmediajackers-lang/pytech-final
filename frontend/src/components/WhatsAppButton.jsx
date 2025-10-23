import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '919205222170'; // India country code + number without spaces
  const message = 'Hello! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-6 bottom-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center">
        {/* WhatsApp Icon SVG */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0C7.164 0 0 7.164 0 16c0 2.828.738 5.582 2.137 8.004L.075 31.925l8.121-2.036A15.944 15.944 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.428 22.864c-.353.994-2.081 1.825-2.867 1.947-.768.12-1.767.175-2.85-.178a26.043 26.043 0 01-2.582-.954c-4.539-1.968-7.501-6.553-7.727-6.856-.226-.303-1.853-2.465-1.853-4.698 0-2.234 1.172-3.33 1.588-3.784.416-.453.908-.567 1.211-.567.303 0 .605.003.871.015.278.014.652-.106.99.757.353.898 1.206 2.943 1.312 3.154.107.212.178.46.036.764-.141.303-.212.492-.419.757-.21.264-.439.59-.628.792-.21.227-.428.47-.184.923.244.454 1.087 1.794 2.333 2.907 1.604 1.433 2.959 1.878 3.376 2.09.416.211.657.177.899-.107.242-.283.999-1.165 1.265-1.565.266-.4.532-.334.899-.199.366.134 2.332 1.099 2.73 1.3.4.2.666.3.762.466.095.167.095.964-.258 1.958z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      {/* Tooltip */}
      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
