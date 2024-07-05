import React from 'react';
import './TextoFormatado.css'; // Certifique-se de incluir a estilização no seu CSS

const TextoFormatado = ({ title, text }) => {
  // Função para processar o texto e adicionar negrito
  const formatText = (text) => {
    // Substitui **texto** por <strong>texto</strong>
    const boldPattern = /\*\*(.*?)\*\*/g;
    const parts = text.split(boldPattern);
    return parts.map((part, index) => (
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    ));
  };

  return (
    <div className="TextoFormatado">
      <h1>{title}</h1>
      <p>{formatText(text)}</p>
    </div>
  );
};

export default TextoFormatado;
