import React from 'react';
import './Footer.css';
import realizacaoImage from '../../img/sbc.png'; // substitua pelo caminho correto da imagem
import organizacaoImage from '../../img/LogoC3BrancoG.png'; // substitua pelo caminho correto da imagem
import apoioImage from '../../img/fapergs.png'; // substitua pelo caminho correto da imagem
import patrocinioImageSVG from '../../img/logosvg.png';
import patrocinioImageITEC from '../../img/logoitec.png';
import patrocinioCDN from '../../img/logocdntv.png';
import patrociniovetorial from '../../img/logovetorial.png';
import patrociniosagres from '../../img/logosagres.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-segments">
        <div className="segment">
          <h3>Realização</h3>
          <a
            href="https://www.sbc.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={realizacaoImage} alt="Realização" className="footer-image" />
          </a>
        </div>

        <div className="segment">
          <h3>Apoio Financeiro</h3>
          <a
            href="https://www.fapergs.rs.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={apoioImage} alt="Apoio Financeiro" className="footer-image" />
          </a>
        </div>

        
        <div className="segment">
          <h3>Patrocínios</h3>
          <div className="footer-images">
            <table className="center-table">
              <tbody>
                <tr>
                  <td className="center-cell">
                    <a href="http://www.c3.furg.br/sobre.php" target="_blank" rel="noopener noreferrer">
                      <img src={patrocinioImageSVG} alt="Patrocínio" className="footer-image" />
                    </a>
                  </td>
                  <td className="center-cell">
                    <a href="https://itecfurg.org/?page_id=5" target="_blank" rel="noopener noreferrer">
                      <img src={patrocinioImageITEC} alt="Patrocínio" className="footer-image" />
                    </a>
                  </td>
                </tr>
                <tr>
                  
                  <td>
                    <a
                      href="https://cdn.tv.br/institucional/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={patrocinioCDN}
                        alt="Patrocínio"
                        className="footer-image"
                      />
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://example.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={patrociniosagres}
                        alt="Patrocínio"
                        className="footer-image"
                      />
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://example.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={patrociniovetorial}
                        alt="Patrocínio"
                        className="footer-image"
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="segment">
          <h3>Organização</h3>
          <a
            href="http://www.c3.furg.br/sobre.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={organizacaoImage} alt="Organização" className="footer-image" />
          </a>
        </div>

        <div className="segment">
          <h3>Contato</h3>
          <p>abreuesttebam@gmail.com</p>
          <p>dalmazo@furg.br</p>
          <p>pbmarcos@furg.</p>
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