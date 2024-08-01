import './ChamadaWrseg2023.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BlueBar from './../../components/BlueBar/BlueBar';
import TextoFormatado from './../../components/TextoFormatado/TextoFormatado';

const titulo1 = `Chamada para Trabalhos`;
const texto1 = `Autores são convidados a submeter artigos contendo resultados iniciais/finais das suas pesquisas ou propostas. Neste ano, além dos trabalhos tradicionalmente publicados, também encorajamos a submissão de trabalhos com teor predominante prático.`;

const titulo2 = `Datas importantes`;
const texto2 = `01/09/2024: Data limite de registro e submissão de artigos
15/10/2024: Notificação de aceite dos artigos`;

const titulo3 = `Tópicos de Interesse (lista não exaustiva)`;
const texto3 = `Arquitetura de redes
Blockchain
Computação na nuvem
Computação orientada a serviços
Computação sensível ao contexto
Computação ubíqua/pervasiva
Desempenho, escalabilidade e confiabilidade
Distributed Ledger Technology (DLT)
Engenharia e controle de tráfego
Especificação, validação e verificação
Internet do Futuro
Gerenciamento e operação de redes
Internet das Coisas (IoT)
Internet Industrial (IIoT)
Medição e monitoração de redes
Projeto e análise de redes
Protocolos de redes
Qualidade de experiência e de serviços
Redes autonômicas e auto-organizáveis
Redes centradas em informação (ICN)
Redes definidas por software (SDN)
Redes de sensores
Redes P2P
Redes móveis
Redes ópticas
Redes programáveis
Redes sem fio
Redes sociais
Redes sustentáveis (Green Networking)
Redes tolerantes a atrasos/interrupções
Redes veiculares
Roteamento, comutação e endereçamento
Segurança em redes
Serviços Web
Tecnologia e acesso de banda larga
Tolerância a falhas e resiliência
TV Digital
Virtualização de Funções de Rede (NFV)
Virtualização de redes`;


const titulo4 = `Instruções aos Autores`;
const texto4 = `Todos os artigos devem ser elaborados no formato SBC, com tamanho mínimo de 4 páginas e máximo de 6 páginas em língua portuguesa ou inglesa. A formatação do texto deve seguir o estilo da SBC. Caso o artigo seja escrito em português, será necessário um Abstract em inglês junto com o Resumo em português; caso o artigo seja escrito em inglês, não é necessário Resumo em português, mas é necessário o Abstract em inglês. Todos artigos submetidos deverão conter nomes dos autores, incluindo suas respectivas afiliações após o título.`;


const textoEmBreve = 'Em breve';

function ChamadaWrseg2023() {
  return (
    <div className='Container-Chamada-errc-2023'>
        <BlueBar title="Chamada WRSeg 2024" />
        <TextoFormatado title={titulo1} text={textoEmBreve} />
        <TextoFormatado title={titulo2} text={textoEmBreve} />
        <TextoFormatado title={titulo3} text={textoEmBreve} />
        <TextoFormatado title={titulo4} text={textoEmBreve} />
    </div>
  )
}

export default ChamadaWrseg2023;