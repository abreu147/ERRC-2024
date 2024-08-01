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

const titulo5 = "Submissão de Trabalhos";
const texto5 = `Serão aceitos trabalhos: artigos com no mínimo 4 (quatro) e máximo de 6(seis) páginas. O número máximo de páginas para a modalidade inclui resumo, abstract, figuras, referências e anexos. O texto pode ser escrito nos idiomas português, espanhol ou inglês, seguindo os formatos (LaTeX e Word) disponíveis no site da SBC, através do endereço http://www.sbc.org.br (menu Documentos, Publicações/Templates para Artigos e Capítulos de Livros). A submissão de trabalhos será exclusivamente eletrônica.`;

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