import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+593939858060'; // Reemplaza con tu número de teléfono
    const message = encodeURIComponent('Hola, estoy interesado/a en tu servicio.'); // Reemplaza con tu mensaje predefinido
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  
  };

  return (
    <div className="floating-whatsapp"  onClick={handleWhatsAppClick}>
      <img
        className="floating-whatsappF"
        src="assets/whatsapp.png"
        alt="WhatsApp"
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default FloatingWhatsApp;