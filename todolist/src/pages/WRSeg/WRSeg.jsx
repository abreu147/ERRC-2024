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

const titulo5 = `Processo de Revisão, Critérios e Premiações`;
const texto5 = `O processo de revisão será realizado por pelo menos três revisores. O WRSeg 2024 concederá prêmios para as submissões de artigos, recebendo um certificado durante a cerimônia de encerramento do evento. Todos os artigos aceitos são elegíveis para estes prêmios: 
(1) Certificado de Melhor Artigo Completo WRSeg; 
(2) Certificado de Melhor Artigo de Estudante de Graduação; e 
(3) Certificado de Melhor apresentação.

As premiações serão concedidas apenas para aqueles artigos apresentados por alunos na ERRC/WRSeg 2024.

`;

const titulo6 = `Submissão de Artigos`
const texto6 = `A coordenação da ERRC/WRSeg 2024 pede atenção dos autores ao novo formato de submissão. A ERRC/WRSeg 2024 está inovando e empregando o novo formato da SBC para submissão de artigos com duas colunas: 

https://www.overleaf.com/latex/templates/template-anais-sbc-portugues-v1-jems3/tnbctcfcbnrs

Atenção para os autores preencherem o ORCID (https://orcid.org/ ) nas informações de autores neste novo formato de artigo. O ORCID é um identificador gratuito, único e persistente (unique, persistent identifier - PID) internacional  para pessoas usarem enquanto se envolvem em atividades de pesquisa, bolsa de estudos e inovação.

A coordenação do WRSeg 2024 está aceitando dois tipos de submissões:
**•**Artigos curtos (até 3 páginas de conteúdo, com 1 página adicional para referências e anexos.) que apresentam trabalhos em desenvolvimento, mas que possuem um potencial expressivo, OU que ofereçam resultados que não justificam uma submissão completa. Artigos curtos podem articular uma visão de alto nível e descrever direções futuras desafiadoras que os autores acreditam que a comunidade deve abordar; validar, verificar ou atualizar resultados importantes; ou apresentar novas ideias que desafiem pressupostos existentes. Aqui também se enquadram artigos contendo resultados iniciais das suas pesquisas ou propostas promissoras. Os revisores designados para avaliar artigos curtos serão instruídos das expectativas específicas para artigos curtos. Qualquer submissão que exceda o limite de páginas para artigos curtos será avaliada como um artigo completo.
**•**Artigos completos (até 5 páginas, com 2 páginas adicionais para referências e anexos) que descrevem pesquisas originais, com concisão e aderência apropriada aos tópicos e temas que abordam.

Os artigos podem ser escritos em português ou inglês, sendo necessário o resumo ou o abstract. A submissão de artigos será feita exclusivamente em formato PDF, por meio do sistema JEMS3 da SBC: https://jems3.sbc.org.br/events/163 
`

const titulo7 = `Uso de INTELIGÊNCIA ARTIFICIAL GENERATIVA`;
const texto7 = `Solicitamos que todos os autores verifiquem o novo CÓDIGO DE CONDUTA DA SBC, disponível em  https://sol.sbc.org.br/index.php/indice/conduta , especialmente a parte relativa ao uso de Inteligência Artificial (IA) Generativa.`;
const titulo8 = `Sugestões aos Autores`;
const texto8 = ` Algumas sugestões endereçadas aos autores que desejam submeter seus artigos para publicação e apresentação na ERRC/WRSeg 2024. Cada sugestão é acompanhada de referências que podem ajudar na sua concretização.

A primeira sugestão é planejar o que será escrito antes de começar a escrever.

**•**Dicas gerais são apresentadas em “Ogres, Villagers, & the Art of Writing”, escrito por S. Keshav - http://blizzard.cs.uwaterloo.ca/keshav/home/Papers/data/10/ogres2.pdf .

**•**Para planejar aspectos mais específicos do artigo a ser submetido para a ERRC/WRSeg, pode ser útil analisar o formulário que será empregado pelos revisores. Use o formulário como guia para auto-avaliar o seu artigo. Verifique, por exemplo, no quesito originalidade, se o seu artigo compara o trabalho com outros na literatura; no quesito mérito técnico, se o artigo diz claramente ao revisor qual a contribuição do trabalho.

**•**Na preparação do seu artigo, use o formato exigido. O ERRC/WRSeg exige o modelo novo da SBC. Atente para o limite de espaço.

A segunda sugestão é estudar o processo de escrita.
**•**Um dos melhores recursos disponíveis em português é o “Pequeno Manual da Escrita Técnica”, escrito por Roberto Hexsel. Esse material é uma boa leitura para alunos ao escreverem seus trabalhos. Um dos lemas do texto é “leia o que escreveu” - https://www.inf.ufpr.br/pos/techreport/RT_DINF004_2004.pdf .

**•**É importante também entender os principais aspectos elencados em “Como (não) Escrever um Artigo Técnico-Científico” - https://www.scribd.com/document/11655966/Como-Nao-Escrever-um-Artigo-Cientifico 

**•**“Dicas sobre escrita” - https://www.ic.unicamp.br/~rodolfo/dicas/escrita.html e “Dicas sobre apresentações” - https://www.ic.unicamp.br/~rodolfo/dicas/apresentacoes.html , elaboradas por Rodolfo de Azevedo, contém dicas importantes e úteis para escrita e apresentação de artigos.

**•**“Writing Technical Articles”, escrito por Henning Schulzrinne, descreve em detalhes o processo de se elaborar um artigo técnico de qualidade na área da computação, tratando também aspectos de estilo - http://www.cs.columbia.edu/~hgs/etc/writing-style.html .

A terceira sugestão é revisar o artigo.
**•**Faça uma revisão adequada do conteúdo do artigo antes de submeter. Peça para seus co-autores mais experientes em escrita revisar cuidadosamente a versão final. Alternativamente, peça para amigos ou profissionais em revisão de texto dar um toque de qualidade ao seu texto.

**•**Trocar a cor da fonte ou o meio (eletrônico/impresso) pode ajudar a recobrar a concentração em trechos que já tenham sido revisados múltiplas vezes anteriormente.

**•**Faça um checklist sobre a formatação do artigo. Use um corretor ortográfico para evitar erros básicos, como uso da vírgula, crase e concordância nominal. Em seguida, verifique se todos elementos auxiliares, como figuras, tabelas, equações, são referenciados no texto e de maneira adequada. Para cada citação, verifique: 
(i) se é pertinente para trabalho; 
(ii) se é coerente com o artigo referenciado e não é uma referência indireta; e 
(iii) aponta para o artigo correto. Verifique se todas as referências seguem o mesmo padrão, por exemplo, quanto ao grau de detalhes.

**•**Por fim, imprima duas vias do artigo, uma colorida e outra preto e branco, e procure detectar possíveis problemas de impressão.
`

const titulo9 = `Comitê de Programa`;
const texto9 = `Em definição`
const titulo10 = `Coordenação WRSeg/2024:`;
const texto10 = `Prof. Dr. Bruno L. Dalmazo <dalmazo@furg.br>
Prof. Dr. Charles Christian Miers <charles.miers@udesc.br>
Prof. Dr. Marco Antônio Torres Rojas <marco.rojas@ifc.edu.br>
Prof. Dr. Pedro de B. Marcos <pbmarcos@furg.br>
`


function WRSeg() {
  return (
    <div className='Container-Chamada-errc-2023'>

        <BlueBar title="WRSeg" />
        <TextoFormatado title={titulo1} text={texto1} />
        <TextoFormatado title={titulo2} text={texto2} />
        <TextoFormatado title={titulo3} text={texto3} />
        <TextoFormatado title={titulo4} text={texto4} />
        <TextoFormatado title={titulo6} text={texto6} />
        <TextoFormatado title={titulo7} text={texto7} />
        <TextoFormatado title={titulo5} text={texto5} />
        <TextoFormatado title={titulo8} text={texto8} />
        <TextoFormatado title={titulo9} text={texto9} />
        <TextoFormatado title={titulo10} text={texto10} />
    </div>
  )
}

export default WRSeg;