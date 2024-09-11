import React from 'react'
import './Edicao2024.css'
import TextoFormatado from '../../components/TextoFormatado/TextoFormatado.jsx';
import BlueBar from '../../components/BlueBar/BlueBar.jsx';

const titulo1 = "Coordenação Geral";
const texto1 = `Prof. Dr. Bruno Lopes Dalmazo (FURG)
Prof. Dr. Marcelo Rita Pias (FURG)
Prof. Dr. Pedro de Botelho Marcos (FURG)
Prof. Dr. Vinicius Garcia Pinto (FURG)`
;

const titulo2 = "Organização do Comitê Técnico de Programa da ERRC";
const texto2 = `Prof. Dr. Leandro Márcio Bertholdo (UFRGS)
Prof. Dr. Pedro de Botelho Marcos (FURG)`
;

const titulo3 = "Organização do Comitê de Programa do WRSeg";
const texto3 = `Prof. Dr. Bruno Lopes Dalmazo (FURG)
Prof. Dr. Charles Christian Miers (UDESC)`
;


/* 
  const titulo1 = "Inscrição nos Minicursos (Gratuito para inscritos na ERRC 2024)";
  const texto1 = `Limite de vagas. Portanto terão prioridade participantes que preencherem o formulário. As vagas remanescentes serão alocadas por ordem de chegada.

  Recomendamos que você traga seu próprio laptop para os minicursos.`;

  const titulo2 = "Informações para Apresentadores";
  const texto2 = "Cada artigo terá um slot de **15 minutos para apresentação**, seguido de **5 minutos para perguntas**. A apresentação dos artigos acontecerá na sala definida na programação. A não apresentação presencial do artigo implica no trabalho ser excluído dos anais do evento e do Portal de Conteúdos da SBC.";
 */

function Edicao2024() {
  return (
    <div className='Edicao2024-div'>
      <BlueBar title="Edição 2024" />
      <TextoFormatado title={titulo1} text={texto1} />
      <TextoFormatado title={titulo2} text={texto2} />
      <TextoFormatado title={titulo3} text={texto3} />

    </div>
    

  )
}

export default Edicao2024