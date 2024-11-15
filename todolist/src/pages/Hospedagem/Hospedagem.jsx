import React from 'react';
import './Hospedagem.css';
import TextoFormatado from '../../components/TextoFormatado/TextoFormatado.jsx';
import BlueBar from '../../components/BlueBar/BlueBar.jsx';
import foto from '../../img/laghetto.png'
import foto2 from '../../img/arpini.png'
import foto3 from '../../img/atlantico.png'


const titulo12 = "Onde se hospedar?";
const texto12 = "Encontre abaixo as melhores opções de hospedagem na cidade.";

const descricaoFoto = "Hotel Laghetto";
const local = "Rua Aquidaban, 703 - Centro, Rio Grande";
const contato1 = "Telefone para contato: (53) 3010-1062"
const contato2 = ( 
  <a href= "https://www.laghettohoteis.com.br/hoteis/rio-grande" target="_blank" rel="noopener noreferrer">
    Site para contato
  </a>
)
const dist1 = "Distância até o Campus Carreiros: 8,8km"


const descricao2 = "Hotel Arpini";
const local2 = "Av. Pres. Vargas, 631 - Bairro Parque, Rio Grande";
const contato3 = "Telefone para contato: (53) 3293-1811"
const contato4 = ( 
  <a href= "https://arpinihotel.com.br/" target="_blank" rel="noopener noreferrer">
    Site para contato
  </a>
)
const dist2 = "Distância até o Campus Carreiros: 6,1km"

const descricao3 = "Hotel Atlântico";
const local3 = "Av. Duque de Caxias, 55 - Centro, Rio Grande";
const contato5 = "Telefone para contato:  (53) 3231-3833"
const contato6 = ( 
  <a href= "https://www.hoteisatlantico.com.br/" target="_blank" rel="noopener noreferrer">
    Site para contato
  </a>
)
const dist3 = "Distância até o Campus Carreiros: 9,4km"



function Hospedagem() {
  return (
    <div className='Hospedagem-div'>
      <BlueBar title='Hospedagem' />
      <TextoFormatado title={titulo12} text={texto12} />
      
      <div className="imagem-descricao">
        <div className="hotel-item">
          <img src={foto} alt={descricaoFoto} className="imagem" />
          <div className="hotel-info">
            <h3>{descricaoFoto}</h3>
            <p>{local}</p>
            <p>{contato1}</p>
            <p>{contato2}</p>
            <p>{dist1}</p>
          </div>
        </div>
        
        <div className="hotel-item">
          <img src={foto2} alt={descricao2} className="imagem" />
          <div className="hotel-info">
            <h3>{descricao2}</h3>
            <p>{local2}</p>
            <p>{contato3}</p>
            <p>{contato4}</p>
            <p>{dist2}</p>
          </div>
        </div>

        <div className="hotel-item">
          <img src={foto3} alt={descricao3} className="imagem" />
          <div className="hotel-info">
            <h3>{descricao3}</h3>
            <p>{local3}</p>
            <p>{contato5}</p>
            <p>{contato6}</p>
            <p>{dist3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hospedagem;

/* 
  const titulo1 = "Inscrição nos Minicursos (Gratuito para inscritos na ERRC 2024)";
  const texto1 = `Limite de vagas. Portanto terão prioridade participantes que preencherem o formulário. As vagas remanescentes serão alocadas por ordem de chegada.

  Recomendamos que você traga seu próprio laptop para os minicursos.`;

  const titulo2 = "Informações para Apresentadores";
  const texto2 = "Cada artigo terá um slot de **15 minutos para apresentação**, seguido de **5 minutos para perguntas**. A apresentação dos artigos acontecerá na sala definida na programação. A não apresentação presencial do artigo implica no trabalho ser excluído dos anais do evento e do Portal de Conteúdos da SBC.";
 */
