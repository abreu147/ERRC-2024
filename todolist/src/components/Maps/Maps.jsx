import React from 'react';

const Maps = () => {
  const iframeStyle = {
    width: '100%',
    height: '100%',
    border: 0,
  };

  const containerStyle = {
    width: '70%',
    height: '45vh', // Ajusta a altura do iframe conforme necessário
    margin: '0 auto', // Centraliza o iframe horizontalmente
  };

  return (
    <div style={containerStyle}>
      <iframe
        title="Google Map of CIDEC"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.8509809857906!2d-52.1647006575602!3d-32.07327904910603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95119a453688dbdb%3A0x688c325ad8c136e8!2sCIDEC!5e0!3m2!1sen!2sbr!4v1722530477332!5m2!1sen!2sbr"
        style={iframeStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
