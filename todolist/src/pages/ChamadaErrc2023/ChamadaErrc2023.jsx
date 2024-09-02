import './ChamadaErrc2023.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BlueBar from './../../components/BlueBar/BlueBar';
import TextoFormatado from './../../components/TextoFormatado/TextoFormatado';


const titulo1 = `Chamada para Trabalhos`;
const texto1 = `A Escola Regional de Redes de Computadores (ERRC) é o principal evento regional sobre redes de computadores e sistemas distribuídos no Brasil. Embora organizada na região sul, a ERRC aceita submissões de qualquer localidade e não está restrita à área acadêmica; casos de cooperação entre universidades e empresas são fortemente desejáveis.

Convidamos os autores a submeterem artigos com resultados de suas pesquisas, mesmo que em estágio inicial ou com resultados preliminares. Como estamos na era da pesquisa orientada por dados, valorizamos artigos que compartilhem seus dados de maneira aberta ou apresentem artefatos de forma reprodutível. Trabalhos com foco prático, como aplicações de novas tecnologias, como métodos e ferramentas da indústria da Internet, também são bem-vindos. A edição de 2024 incluirá duas trilhas de submissão:

•**Trilha Principal:** Para trabalhos de pesquisa relacionados a redes de computadores, voltados para acadêmicos de instituições de ensino técnico, superior ou de pós-graduação. Esta trilha discute novas abordagens, tecnologias, soluções inovadoras, coleta de dados e reprodutibilidade de experimentos.

•**Trilha de Experiências e Demonstrações:** Para trabalhos que relatam implementações técnicas ou experiências práticas com técnicas ou tecnologias emergentes, geralmente realizadas em ambientes extra-acadêmicos. Podem incluir o uso de tecnologias de rede em sala de aula ou a implementação de ferramentas na infraestrutura de redes da indústria. Os artigos desta trilha devem apresentar casos de uso, detalhes de implementação e lições aprendidas.

Os artigos submetidos à Escola pdem ser escritos em português ou inglês, e devem seguir o **novo formato da SBC**, que é inédito e será usado pela primeira vez durante o ERRC. Artigos em português devem incluir um abstract em inglês e um resumo em português; artigos em inglês precisam conter apenas do abstract. Aceitamos duas modalidades de submissão: **artigos completos** com até 8 páginas e **resumos estendidos** com até 4 páginas. O número total de páginas deve incluir resumo, abstract, figuras, diagramas, referências e anexos. Todos os artigos devem incluir os nomes dos autores e suas respectivas afiliações após o título.

O template de estilo da SBC está disponível somente em formato LaTeX. O template pode ser obtido a partir deste repositório em formato ZIP **(https://github.com/LMBertholdo/template_sbc)**, ou em breve, no Overleaf (link a ser atualizado em um futuro próximo).

As submissões devem ser feitas até às **23:59 do dia 07/10/2024** através do JEMS3 da ERRC 2024 **(https://jems3.sbc.org.br/errc2024)**.`
;

const titulo2 = `Processo de Revisão e Critérios`;
const texto2 = `A ERRC 2024 convida a dois tipos de submissões:

•**Artigos completos** (até 8 páginas para texto, figuras, referências e anexos) que descrevem pesquisas originais, com concisão e aderência apropriada aos tópicos e temas que abordam.

•**Artigos curtos** (até 4 páginas para texto, figuras, referências e anexos) que apresentam trabalhos menos maduros, mas que demonstram um grande potencial, OU oferecem resultados que não justificam uma submissão completa. Artigos curtos podem articular uma visão de alto nível e descrever direções futuras desafiadoras que os autores acreditam que a comunidade deve abordar; validar, verificar ou atualizar resultados importantes; ou apresentar novas ideias que desafiem pressupostos existentes. Nosso plano é designar um subconjunto de revisores exclusivamente para a avaliação de artigos curtos. Esses revisores serão lembrados das expectativas específicas para artigos curtos.

**Qualquer submissão que exceda o limite de páginas para artigos curtos será avaliada como um artigo completo.**

O processo de revisão será realizado por pelo menos três revisores. 

A ERRC 2024 concederá prêmios para as submissões de artigos, recebendo um certificado durante a cerimonia de encerramento do evento. Todos os artigos aceitos são elegíveis para estes prêmios: (1) Prêmio de Melhor Artigo da Trilha Principal; (2) prêmio de Melhor Artigo de Estudante de Graduação; (3) prêmio para o melhor trabalho da Trilha de Experiências; e (4) um prêmio para a melhor apresentação. 
`;

const titulo3 = `Comitê de Programa`;
const texto3 = `Cada trabalho será avaliado por três ou mais especialistas. A lista dos membros do comitê de programa está disponível aqui.`;

const titulo4 = `Tópicos de Interesse (lista não exaustiva)`;
const texto4 = `Arquitetura de redes
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
Medição e monitoramento de redes
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

function ChamadaErrc2023() {
  return (
    <div className='Container-Chamada-errc-2023'>
        <BlueBar title="Chamada ERRC 2024" />
        <TextoFormatado title={titulo1} text={texto1} />
        <TextoFormatado title={titulo2} text={texto2} />
        <TextoFormatado title={titulo3} text={texto3} />
        <TextoFormatado title={titulo4} text={texto4} />

    </div>
  )
}

export default ChamadaErrc2023;