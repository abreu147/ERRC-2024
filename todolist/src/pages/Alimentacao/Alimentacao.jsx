import React from 'react'
import './Alimentacao.css'
import TextoFormatado from '../../components/TextoFormatado/TextoFormatado.jsx';
import BlueBar from '../../components/BlueBar/BlueBar.jsx';

const titulo12 = "Em Breve";
const texto12 = "";
/* 
  const titulo1 = "Inscrição nos Minicursos (Gratuito para inscritos na ERRC 2024)";
  const texto1 = `Limite de vagas. Portanto terão prioridade participantes que preencherem o formulário. As vagas remanescentes serão alocadas por ordem de chegada.

  Recomendamos que você traga seu próprio laptop para os minicursos.`;

  const titulo2 = "Informações para Apresentadores";
  const texto2 = "Cada artigo terá um slot de **15 minutos para apresentação**, seguido de **5 minutos para perguntas**. A apresentação dos artigos acontecerá na sala definida na programação. A não apresentação presencial do artigo implica no trabalho ser excluído dos anais do evento e do Portal de Conteúdos da SBC.";
 */

function Alimentacao() {
  return (
    <div className='Alimentacao-div'>
      <BlueBar title="Alimentação" />
      <TextoFormatado title={titulo12} text={texto12} />
      {/* <TextoFormatado title={} text={} /> */}
    </div>
    

  )
}

export default Alimentacao