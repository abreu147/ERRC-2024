import React from 'react'
import './Localizacao.css'
import TextoFormatado from '../../components/TextoFormatado/TextoFormatado.jsx';
import BlueBar from '../../components/BlueBar/BlueBar.jsx';
import Maps from '../../components/Maps/Maps.jsx';
const titulo12 = "Como chegar?";
const texto12 = `A Escola Regional de Redes de Computadores (ERRC 2024), um evento de grande relevância na área de tecnologia, terá sua realização no CIDEC-SUL da Universidade Federal do Rio Grande (FURG), localizada em Rio Grande. 

    O CIDEC-SUL está situado no Campus Carreiros da FURG, Rio Grande - RS.
    `;
/* 
  const titulo1 = "Inscrição nos Minicursos (Gratuito para inscritos na ERRC 2024)";
  const texto1 = `Limite de vagas. Portanto terão prioridade participantes que preencherem o formulário. As vagas remanescentes serão alocadas por ordem de chegada.

  Recomendamos que você traga seu próprio laptop para os minicursos.`;

  const titulo2 = "Informações para Apresentadores";
  const texto2 = "Cada artigo terá um slot de **15 minutos para apresentação**, seguido de **5 minutos para perguntas**. A apresentação dos artigos acontecerá na sala definida na programação. A não apresentação presencial do artigo implica no trabalho ser excluído dos anais do evento e do Portal de Conteúdos da SBC.";
 */

function Localizacao() {
  return (
    <div className='Localizacao-div'>
      <BlueBar title="Localização" />
      <TextoFormatado title={titulo12} text={texto12} />
      <div className='DivMap'>
        <h1> 📍Localização</h1>
        <Maps/>
      </div>
      
      {/* <TextoFormatado title={} text={} /> */}
    </div>
    

  )
}

export default Localizacao