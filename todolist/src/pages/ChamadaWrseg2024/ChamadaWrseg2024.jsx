import './ChamadaWrseg2024.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BlueBar from '../../components/BlueBar/BlueBar';
import TextoFormatado from '../../components/TextoFormatado/TextoFormatado';
import BotaoPadrao from '../../components/BotaoPadrao/BotaoPadrao';


const titulo1 = `Chamada para Trabalhos`;
const texto1 = `Autores são convidados a submeter artigos contendo resultados iniciais/finais das suas pesquisas ou propostas. Neste ano, além dos trabalhos tradicionalmente publicados, também encorajamos a submissão de trabalhos com teor predominante prático.`;

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


const titulo5 = `Processo de Revisão e Critérios`;
const texto5 = `A WRSeg 2024 convida a dois tipos de submissões:

•**Artigos completos** (até 5 páginas de conteúdo, com 2 páginas adicionais para referências e anexos) que descrevem pesquisas originais, com concisão e aderência apropriada aos tópicos e temas que abordam.

•**Artigos curtos** (até 3 páginas de conteúdo, com 1 página adicional para referências e anexos) que apresentam trabalhos menos maduros, mas que demonstram um grande potencial, OU oferecem resultados que não justificam uma submissão completa. Artigos curtos podem articular uma visão de alto nível e descrever direções futuras desafiadoras que os autores acreditam que a comunidade deve abordar; validar, verificar ou atualizar resultados importantes; ou apresentar novas ideias que desafiem pressupostos existentes. Nosso plano é designar um subconjunto de revisores exclusivamente para a avaliação de artigos curtos. Esses revisores serão lembrados das expectativas específicas para artigos curtos.

**Qualquer submissão que exceda o limite de páginas para artigos curtos será avaliada como um artigo completo.**

O processo de revisão será realizado por pelo menos três revisores. 

O WRSeg 2024 concederá prêmios para as submissões de artigos, recebendo um certificado durante a cerimonia de encerramento do evento. Todos os artigos aceitos são elegíveis para estes prêmios: (1) Prêmio de Melhor Artigo da Trilha Principal; (2) prêmio de Melhor Artigo de Estudante de Graduação; e (3) um prêmio para a melhor apresentação. 

O novo template de estilo da SBC está disponível somente em formato LaTeX. O template pode ser obtido diretamente no Overleaf através do link https://www.overleaf.com/latex/templates/sbc-paper-2024-v1-dot-0/tnbctcfcbnrs

`;


const textoEmBreve = 'Em breve';

function ChamadaWrseg2024() {
  return (
    <div className='Container-Chamada-errc-2023'>
        <BlueBar title="Chamada WRSeg 2024" />
        <TextoFormatado title={titulo1} text={texto1} />
        <TextoFormatado title={titulo3} text={texto3} />
        <TextoFormatado title={titulo5} text={texto5} />
        <div className='BotaoInscricaoWRSEG'>
          <BotaoPadrao name="Submeter Artigo" route="https://jems3.sbc.org.br/errc2024" />
        </div>
        
    </div>
  )
}

export default ChamadaWrseg2024;