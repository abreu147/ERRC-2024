import '../../App.css';
import './Home.css'
import React from 'react';
import Introduction from '../../components/Introduction/Introduction.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import calendarioIcon from '../../img/calendar-color-icon.svg';
import Footer from '../../components/Footer/Footer';


function Home() {

  return (
    <div className="Home">
      
      <div class="background-section-home">
          <div class="overlay-home"></div>
          <div class="content-home">
              <h1>21ª Escola Regional de Redes <br /> de Computadores (ERRC)</h1>
              <p>21 anos da ERRC | novembro 27-29 | Rio Grande - RS</p>
              <p>Campus Carreiros - FURG</p>
              <p>C3 - Centro de Ciências Computacionais</p>
              <div className='botoes_home_Evento'>
                <p className='Anais'>Anais do Evento</p>
                <p className='Local-home'>Local</p>
              </div>
          </div>
      </div>
      <div className='Resumo-Home'>
        <h2 className='titulo-resumo-home'>Bem-vindo à ERRC 2024!</h2>
        <Introduction />
        <div className='DatasImportantesTitle'>
          <img src={calendarioIcon} alt="Calendário Icon" className="calendario-icon" />
          <h2 className='titulo-resumo-home'> Datas Importantes</h2>
        </div>
        <div className='Texto-Datas-Home'>
          <h1>ERRC</h1>
          <p> XX/XX/2024: Data limite de registro e submissão de artigos </p>
          <p> XX/XX/2024: Data limite de registro e submissão de artigos</p>
        </div>
      </div>
      <Footer />
    </div>
  );
  
}

export default Home;
