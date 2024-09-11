import '../../App.css';
import './Inscricoes.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InformacoesGerais from '../../components/TextoInscricoes/TextoInscricoes.jsx';
import BlueBar from '../../components/BlueBar/BlueBar.jsx';
import TextoFormatado from '../../components/TextoFormatado/TextoFormatado';
import { Link } from "react-router-dom";

const titulo1 = `Política para Autores`;
const texto1 = `Informamos aos autores que, para garantir a publicação de trabalhos aceitos nos anais da ERRC 2024, pelo menos um dos autores deve estar com inscrição confirmada e paga em qualquer categoria. Além disso, é necessária a assinatura e o envio do Formulário de Cessão de Direitos Autorais da Sociedade Brasileira de Computação (SBC) (a ser enviado aos autores de artigos aceitos).

Cada artigo terá um slot de 15 minutos para apresentação, seguido de 5 minutos para perguntas. A apresentação dos artigos acontecerá em sala agendada. A não apresentação do artigo implica no trabalho ser excluído dos anais do evento e do Portal de Conteúdos da SBC.
`
const titulo2 = `Política de Cancelamento`;
const texto2 = `Até dia 15/11/2024 pode-se fazer uma devolução de 50% do valor pago pela inscrição na ERRC 2024. Após esta data não haverá devolução de qualquer valor pago. A política se aplica tanto para o cancelamento da inscrição, quanto para o cancelamento de qualquer atividade adicional. Para solicitar o cancelamento, enviar a solicitação para faturamento@sbc.org.br.`


function Inscricao() {
  return (
    <div className='Container-inscricao'>
        <BlueBar title="Inscrições" />
        <div className='botoes_home_Evento'>
          <Link className='Inscricao-bt' to="">Em Breve</Link>
        </div>
        <InformacoesGerais/>
        <TextoFormatado title={titulo1} text={texto1} />
        <TextoFormatado title={titulo2} text={texto2} />
        
    </div>
  )
}

export default Inscricao