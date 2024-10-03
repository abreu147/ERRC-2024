import '../../App.css';
import './Inscricoes.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InformacoesGerais from '../../components/TextoInscricoes/TextoInscricoes.jsx';
import BlueBar from '../../components/BlueBar/BlueBar.jsx';
import TextoFormatado from '../../components/TextoFormatado/TextoFormatado';
import { Link } from "react-router-dom";


const inscricoes = [
  { categoria: "Estudante associado à SBC com anuidade vigente", faixa1: "R$ 10,00", faixa2: "R$ 30,00", anuidade: "" },
  { categoria: "Estudante associado à SBC com anuidade vencendo em até 90 dias (COMBO: inscrição no evento + renovação da associação à SBC)", faixa1: "R$ 41,00", faixa2: "R$ 61,00"},
  { categoria: "Estudante não associado ou com associação não vigente à SBC (COMBO: inscrição no evento + associação à SBC)", faixa1: "R$ 41,00", faixa2: "R$ 61,00"},
  { categoria: "Estudante não associado à SBC (Somente inscrição no evento)", faixa1: "R$ 42,00", faixa2: "R$ 64,00"},

  { categoria: "Estudante de pós-graduação associado à SBC com anuidade vigente", faixa1: "R$ 30,00", faixa2: "R$ 50,00", anuidade: "" },
  { categoria: "Estudante de pós-graduação associado à SBC com anuidade vencendo em até 90 dias (COMBO: inscrição no evento + renovação da associação à SBC)", faixa1: "R$ 155,00", faixa2: "R$ 175,00"},
  { categoria: "Estudante de pós-graduação não associado ou com associação não vigente à SBC (COMBO: inscrição no evento + associação à SBC)", faixa1: "R$ 155,00", faixa2: "R$ 175,00" },
  { categoria: "Estudante de pós-graduação não associado à SBC (Somente inscrição no evento)", faixa1: "R$ 50,00", faixa2: "R$ 70,00"},

  { categoria: "Professor de educação básica associado à SBC com anuidade vigente", faixa1: "R$ 40,00", faixa2: "R$ 60,00"},
  { categoria: "Professor de educação básica associado à SBC com anuidade vencendo em até 90 dias (COMBO: inscrição no evento + renovação da associação à SBC)", faixa1: "R$ 165,00", faixa2: "R$ 185,00" },
  { categoria: "Professor de educação básica não associado ou com associação não vigente à SBC (COMBO: inscrição no evento + associação à SBC)", faixa1: "R$ 165,00", faixa2: "R$ 185,00" },
  { categoria: "Professor de educação básica não associado à SBC (Somente inscrição no evento)", faixa1: "R$ 60,00", faixa2: "R$ 80,00"},

  { categoria: "Profissional associado à SBC com anuidade vigente", faixa1: "R$ 50,00", faixa2: "R$ 70,00" },
  { categoria: "Profissional associado à SBC com anuidade vencendo em até 90 dias (COMBO: inscrição no evento + renovação da associação à SBC)", faixa1: "R$ 406,00", faixa2: "R$ 426,00", anuidade: "R$ 356,00" },
  { categoria: "Profissional não associado ou com associação não vigente à SBC (COMBO: inscrição no evento + associação à SBC)", faixa1: "R$ 406,00", faixa2: "R$ 426,00" },
  { categoria: "Profissional não associado à SBC (Somente inscrição no evento)", faixa1: "R$ 80,00", faixa2: "R$ 100,00" }
];



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
          <Link className='Inscricao-bt' to="https://centraldesistemas.sbc.org.br/ecos/errc2024" target="_blank" rel="noopener noreferrer">Ir para a inscrição</Link>
        </div>

        <div className="tabela-inscricao">
          <table>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>1ª Faixa de Inscrição (Até 11/11/2024)</th>
                <th>2ª Faixa de Inscrição (Até 25/11/2024)</th>
              </tr>
            </thead>
            <tbody>
              {inscricoes.map((item, index) => (
                <tr key={index}>
                  <td>{item.categoria}</td>
                  <td>{item.faixa1}</td>
                  <td>{item.faixa2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <InformacoesGerais/>
        <TextoFormatado title={titulo1} text={texto1} />
        <TextoFormatado title={titulo2} text={texto2} />
        
    </div>
  )
}

export default Inscricao