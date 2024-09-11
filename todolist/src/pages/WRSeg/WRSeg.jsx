import './WRSeg.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BlueBar from './../../components/BlueBar/BlueBar';
import TextoFormatado from './../../components/TextoFormatado/TextoFormatado';


const titulo1 = '8º Workshop Regional de Segurança da Informação e de Sistemas Computacionais (WRSeg 2024)';
const texto1 = `O Workshop Regional de Segurança da Informação e de Sistemas Computacionais (WRSeg), evento integrante da Escola Regional de Redes de Computadores (ERRC), é um fórum para discussão e apresentação de trabalhos científicos e técnicos nas áreas de segurança da informação e de sistemas computacionais. Este fórum visa promover a reunião de pesquisadores e profissionais interessados no desenvolvimento da área, fomentando o debate e a troca de experiências.`;

const titulo2 = "Chamada para Trabalhos";
const texto2 = `Autores são convidados a submeter artigos contendo resultados iniciais/finais das suas pesquisas ou propostas. Neste ano, além dos trabalhos tradicionalmente publicados, também encorajamos a submissão de trabalhos com teor predominante prático.`;

const titulo3 = "Datas Importantes";
const texto3 = `01/09/2024: Abertura do período de submissões
07/10/2024: Data limite de registro e submissão de artigos`

const titulo4 = "Tópicos de interesse (lista não exaustiva)";
const texto4= `Anonimato e privacidade computacional
Análise de códigos maliciosos
Análise de protocolos de segurança
Auditoria e análise de riscos em sistemas
Autenticação e gestão de identidades
Controle de acesso: modelos e mecanismos
Criminalística e forense computacional
Criptografia e criptoanálise: algoritmos, protocolos, técnicas e aplicações
Gestão de Identidades
Gestão de segurança da informação
Hardware seguro
Incidentes de segurança: prevenção, detecção e resposta
Proteção de propriedade intelectual e DRM
Segurança em aplicações (redes sociais, IoT, …)
Segurança em computação ubíqua/pervasiva
Segurança em internet das coisas
Segurança em redes
Segurança em sistemas distribuídos e paralelos
Segurança em sistemas embarcados
Segurança em sistemas móveis e embarcados
Segurança em sistemas operacionais
Segurança situacional
Software seguro: desenvolvimento, testes e certificação
Técnicas e sistemas para identificação biométrica
Votação eletrônica segura`;

const titulo5 = `Processo de Revisão e Critérios`;
const texto5 = `A WRSeg 2024 convida a dois tipos de submissões:

•**Artigos completos** (até 5 páginas para texto, figuras, referências e anexos) que descrevem pesquisas originais, com concisão e aderência apropriada aos tópicos e temas que abordam.

•**Artigos curtos** (até 3 páginas para texto, figuras, referências e anexos) que apresentam trabalhos menos maduros, mas que demonstram um grande potencial, OU oferecem resultados que não justificam uma submissão completa. Artigos curtos podem articular uma visão de alto nível e descrever direções futuras desafiadoras que os autores acreditam que a comunidade deve abordar; validar, verificar ou atualizar resultados importantes; ou apresentar novas ideias que desafiem pressupostos existentes. Nosso plano é designar um subconjunto de revisores exclusivamente para a avaliação de artigos curtos. Esses revisores serão lembrados das expectativas específicas para artigos curtos.

**Qualquer submissão que exceda o limite de páginas para artigos curtos será avaliada como um artigo completo.**

O processo de revisão será realizado por pelo menos três revisores. 

O WRSeg 2024 concederá prêmios para as submissões de artigos, recebendo um certificado durante a cerimonia de encerramento do evento. Todos os artigos aceitos são elegíveis para estes prêmios: (1) Prêmio de Melhor Artigo da Trilha Principal; (2) prêmio de Melhor Artigo de Estudante de Graduação; e (3) um prêmio para a melhor apresentação. 

`;
function WRSeg() {
  return (
    <div className='Container-Chamada-errc-2023'>
        <BlueBar title="WRSeg" />
        <TextoFormatado title={titulo1} text={texto1} />
        <TextoFormatado title={titulo2} text={texto2} />
        <TextoFormatado title={titulo3} text={texto3} />
        <TextoFormatado title={titulo4} text={texto4} />
        <TextoFormatado title={titulo5} text={texto5} />
    </div>
  )
}

export default WRSeg;