import './ChamadaErrc2023.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BlueBar from './../../components/BlueBar/BlueBar';
import TextoFormatado from './../../components/TextoFormatado/TextoFormatado';

const titulo1 = `Chamada para Trabalhos`;
const texto1 = `Autores são convidados a submeter artigos contendo resultados de suas pesquisas ou suas propostas fundamentadas. Neste ano, além dos trabalhos tradicionalmente publicados (por exemplo resultados de pesquisas), também encorajamos a submissão de trabalhos com teor predominante prático (por exemplo, utilização de tecnologias ou implantação de novas ferramentas). Artigos com propostas de pesquisa em andamento também são bem-vindos. Neste sentido, a edição de 2024 contemplará duas trilha de trabalhos:

**• Regulares (Trilha Principal):** Esta trilha apresentará os trabalhos de pesquisa relacionados às redes de computadores, desenvolvidos pelos acadêmicos de graduação das instituições de ensino superior, preferencialmente, da região sul do Brasil. Esta trilha também apresentará os trabalhos de pesquisa relacionados às redes de computadores, desenvolvidos por estudantes de pós-graduação das instituições de ensino superior, preferencialmente, da região sul do Brasil. Discuta novas abordagens, tecnologias e soluções inovadoras.

**• Experiências e Demonstrações:** trabalhos que reportam implementações de trabalhos técnicos ou experiências práticas com técnicas ou tecnologias emergentes, que tendem a ser realizados em ambientes extra-acadêmicos. Estes podem contemplar a utilização de tecnologias relacionadas a rede (e.g., Mininet) em sala de aula ou a implantação de ferramentas na infraestrutura da rede das instituições. Apresente casos de estudo, implementações bem-sucedidas e lições aprendidas.

Os artigos submetidos à escola devem conter de **4 (quatro) a 6 (seis) páginas em língua portuguesa ou inglesa**. A formatação do texto deve seguir o estilo da SBC. Caso o artigo seja escrito em português, será necessário um **Abstract** em inglês junto com o **Resumo** em português; caso o artigo seja escrito em inglês, não é necessário **Resumo** em português, mas é necessário o **Abstract** em inglês. Serão aceitos trabalhos em duas modalidades: artigos completos de no máximo 6 (seis) páginas e resumos estendidos de no máximo 4 (quatro) páginas. O número máximo de páginas para ambas as modalidades inclui resumo, abstract, figuras, diagramas, referências e anexos. Todos artigos submetidos deverão conter nomes dos autores, incluindo suas respectivas afiliações, após o título.
`;



const titulo2 = `Comitê de Programa`;
const texto2 = `Cada trabalho será avaliado por três ou mais especialistas. A lista dos membros do comitê de programa está disponível aqui.`;

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

function ChamadaErrc2023() {
  return (
    <div className='Container-Chamada-errc-2023'>
        <BlueBar title="Chamada ERRC 2024" />
        <TextoFormatado title={titulo1} text={textoEmBreve} />
        <TextoFormatado title={titulo2} text={textoEmBreve} />
        <TextoFormatado title={titulo3} text={textoEmBreve} />
        <TextoFormatado title={titulo4} text={textoEmBreve} />
    </div>
  )
}

export default ChamadaErrc2023;