import React from 'react';
import './Hospedagem.css';
import TextoFormatado from '../../components/TextoFormatado/TextoFormatado.jsx';
import BlueBar from '../../components/BlueBar/BlueBar.jsx';
import laghetto from '../../img/laghetto.png'
import arpini from '../../img/arpini.png'
import atlantico from '../../img/atlantico.png'





const titulo12 = "Opções de estadia";
const texto12 = "";

const foto = laghetto; 
const descricaoFoto = "Hotel Laghetto";
const local ='Rua Aquidaban, 703 - Centro, Rio Grande '

const foto2 = arpini; 
const descricao2 = "Hotel Arpini";
const local2 ='Av. Pres. Vargas, 631 - Bairro Parque, Rio Grande'

const foto3 = atlantico; 
const descricao3 = "Hotel Atlântico";
const local3 ='Rua Duque de Caxias, 55 - Centro, Rio Grande'

function Hospedagem() {
  return (
    <div className='Hospedagem-div'>
      <BlueBar title="Hospedagem" />
      <TextoFormatado title={titulo12} text={texto12} />
      
      {/* Imagem e descrição */}
      <div className="imagem-descricao">
        <img src={foto} alt="Descrição da imagem" className="imagem" />
        <p>{descricaoFoto}</p>
        <p>{local}</p>
        <img src={foto2} alt="Descrição da imagem" className="imagem" />
        <p>{descricao2}</p>
        <p>{local2}</p>
        <img src={foto3} alt="Descrição da imagem" className="imagem" />
        <p>{descricao3}</p>
        <p>{local3}</p>
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
