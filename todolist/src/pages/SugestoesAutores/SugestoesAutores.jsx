import './SugestoesAutores.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BlueBar from './../../components/BlueBar/BlueBar';
import TextoFormatado from './../../components/TextoFormatado/TextoFormatado';

const titulo1 = `Sugestões para melhora dos artigos`;
const texto1 = ` A seguir são apresentadas sugestões endereçadas aos autores que desejam submeter seus artigos para publicação e apresentação na ERRC/WRSeg. Cada sugestão é acompanhada de referências que podem ajudar na sua concretização.

📝 **A primeira sugestão é planejar o que será escrito antes de começar a escrever.**

**•**Dicas gerais são apresentadas em “Ogres, Villagers, & the Art of Writing”, escrito por S. Keshav.
**•**Para planejar aspectos mais específicos do artigo a ser submetido para a ERRC, pode ser útil analisar o formulário que será empregado pelos revisores. Use o formulário como guia para auto-avaliar o seu artigo. Verifique, por exemplo, no quesito originalidade, se o seu artigo compara o trabalho com outros na literatura; no quesito mérito técnico, se o artigo diz claramente ao revisor qual a contribuição do trabalho.
**•**Na preparação do seu artigo, use o formato exigido. O ERRC/WRSeg exige o modelo da SBC. Atente para o limite de espaço.

📚 **A segunda sugestão é estudar o processo de escrita.**

**•**Um dos melhores recursos disponíveis em português é o “Pequeno Manual da Escrita Técnica”, escrito por Roberto Hexsel. Esse material é uma boa leitura para alunos ao escreverem seus trabalhos. Um dos lemas do texto é “leia o que escreveu”.
**•**Outro bom material em português é o “Como escrever um Artigo Científico ou Técnico: Alguns Aspectos”.
**•**É importante também entender os principais aspectos elencados em “Como (não) Escrever um Artigo Técnico-Científico”.
**•**“Dicas sobre escrita” e “Dicas sobre apresentações”, elaboras por Rodolfo de Azevedo, contém dicas importantes e úteis para escrita e apresentação de artigos.
**•**“Writing Technical Articles”, escrito por Henning Schulzrinne, descreve em detalhes o processo de se elaborar um artigo técnico de qualidade na área da computação, tratando também aspectos de estilo.
**•**“The Elements of Style” é uma referência interessante para compreender e aplicar elementos de estilo na escrita.
**•**A Introdução (“Writing a good introduction”) é fundamental para “converter” um potencial leitor, que se interessou pela introdução, em um leitor do trabalho completo.
**•**“On Writing Well”, escrito por William Zinsser, é um dos melhores e mais sucintos livros sobre como escrever bem. Apesar de ser um livro voltado para escrita em inglês, boa parte de suas dicas podem ser aplicadas em outras línguas, como português. Uma dica apresentada é dar preferência para palavras simples, frases curtas e objetivas.
**•**O post “The Six Best Tips From On Writing Well” sumariza as principais dicas do livro “On Writing Well”.
**•**“As notas de Derek Sivers”, do livro “On Writing Well”, contém várias dicas para melhorar substancialmente a habilidade de escrita de qualquer pessoa. Tente seguir as dicas para obter resultados cada vez melhores.

🔁**A terceira sugestão é revisar o artigo.**

**•**Faça uma revisão adequada do conteúdo do artigo antes de submeter. Peça para seus co-autores mais experientes em escrita revisar cuidadosamente a versão final. Alternativamente, peça para amigos ou profissionais em revisão de texto dar um toque de qualidade ao seu texto.
Trocar a cor da fonte ou o meio (eletrônico/impresso) pode ajudar a recobrar a concentração em trechos que já tenham sido revisados múltiplas vezes anteriormente.
Faça um checklist sobre a formatação do artigo. Use um corretor ortográfico para evitar erros básicos, como uso da vírgula, crase e concordância nominal. Em seguida, verifique se todos elementos auxiliares, como figuras, tabelas, equações, são referenciados no texto e de maneira adequada. Para cada citação, verifique: se (i) ela é pertinente para trabalho, (ii) se ela é coerente com o artigo referenciado e não é uma referência indireta, e (iii) aponta para o artigo correto. Verifique se todas as referências seguem mesmo padrão, por exemplo, quanto ao grau de detalhes.
**•**Por fim, imprima duas vias do artigo, uma colorida e outra preto e branco, e procure detectar possíveis problemas de impressão.`;


function SugestoesAutores() {
  return (
    <div className='Container-Chamada-errc-2023'>
        <BlueBar title="Sugestões aos Autores" />
        <TextoFormatado title={titulo1} text={texto1} />
    </div>
  )
}

export default SugestoesAutores;