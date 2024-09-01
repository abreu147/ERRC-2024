import React from 'react';
import './Footer.css';
import realizacaoImage from '../../img/sbc.png'; // substitua pelo caminho correto da imagem
import organizacaoImage from '../../img/LogoC3BrancoG.png'; // substitua pelo caminho correto da imagem
import apoioImage from '../../img/fapergs.png'; // substitua pelo caminho correto da imagem

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-segments">
        <div className="segment">
          <h3>Realização</h3>
          
          <a href="https://www.sbc.org.br/" target="_blank" rel="noopener noreferrer">
            <img src={realizacaoImage} alt="Realização" className="footer-image" />
          </a>
          
        </div>
        <div className="segment">
          <h3>Apoio Financeiro</h3>
          
          <a href="https://www.fapergs.rs.gov.br/" target="_blank" rel="noopener noreferrer">
            <img src={apoioImage} alt="Apoio Financeiro" className="footer-image" />
          </a>
          
        </div>
        <div className="segment">
          <h3>Organização</h3>
          <a href="http://www.c3.furg.br/sobre.php" target="_blank" rel="noopener noreferrer">
            <img src={organizacaoImage} alt="Organização" className="footer-image" />
          </a>
        </div>
        <div className="segment">
          <h3>Contato</h3>
          <p>abreuesttebam@gmail.com</p>
          <p>dalmazo@furg.br</p>
          <p>pbmarcos@furg.br</p>
        </div>
      </div>
      <div className="footer-text">
        <p>
          21ª Escola Regional de Redes de Computadores (ERRC 2024) - Meetup Conference | Developed by Abreu.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
