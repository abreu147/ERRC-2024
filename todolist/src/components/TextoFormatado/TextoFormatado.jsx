import React from 'react';
import './TextoFormatado.css'; // Certifique-se de incluir a estilização no seu CSS

const TextoFormatado = ({ title, text }) => {
  // Função para processar o texto e adicionar formatações (negrito, tachado e links)
  const formatText = (text) => {
    // Padrão para negrito (**texto**)
    const boldPattern = /\*\*(.*?)\*\*/g;
    // Padrão para tachado (~~texto~~)
    const strikePattern = /~~(.*?)~~/g;
    // Padrão para links (https:// ou http:// seguido de texto)
    const linkPattern = /(https?:\/\/[^\s]+)/g;

    // Primeiro, lida com o negrito
    let formattedText = text.split(boldPattern).map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );

    // Depois lida com o tachado
    formattedText = formattedText.map((fragment, index) =>
      typeof fragment === 'string' ? fragment.split(strikePattern).map((subPart, subIndex) =>
        subIndex % 2 === 1 ? <s key={`${index}-${subIndex}`}>{subPart}</s> : subPart
      ) : fragment
    ).flat();

    // Por último, lida com os links
    formattedText = formattedText.map((fragment, index) =>
      typeof fragment === 'string' ? fragment.split(linkPattern).map((subPart, subIndex) =>
        linkPattern.test(subPart) ? <a href={subPart} key={`${index}-${subIndex}`} target="_blank" rel="noopener noreferrer">{subPart}</a> : subPart
      ) : fragment
    ).flat();

    return formattedText;
  };

  return (
    <div className="TextoFormatado">
      <h1>{title}</h1>
      <p>{formatText(text)}</p>
    </div>
  );
};

export default TextoFormatado;
