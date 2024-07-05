import '../../App.css';
import './Premiacoes.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TextoFormatado from '../../components/TextoFormatado/TextoFormatado.jsx';
import BlueBar from '../../components/BlueBar/BlueBar.jsx';

function Premiacoes() {

  const titulo1 = 'Premiações para os artigos';
  const texto1 = `Os melhores trabalhos do ERRC 2023 receberão um certificado durante a cerimônia durante o evento.

  **•Melhor Artigo de Pós-Graduação (Trilha Principal):** Trabalhos que tenham como primeiro autor alunos de Mestrado ou Doutorado.

  **•Melhor Artigo de Graduação (Trilha Principal):** Trabalhos que tenham como primeiro autor alunos de Bacharelado, Tecnólogo ou Ensino Técnico.
  
  **•Melhor Apresentação de Trabalho:** (Trilha Principal e Experiências/Demonstrações): Além da análise tećnica, também serão premiados os artigos que forem melhor apresentados no evento. A premiação se destina a artigos apresentados por alunos de Pós-Graduação, Bacharelado, Tecnólogo ou Ensino Técnico. O apresentador deve ser autor ou co-autor do trabalho

  **Regras de Avaliação e Seleção:**

    **•Melhor Artigo:** Os melhores artigos serão selecionados com base nas notas da avaliações via JEMS3. Os artigos melhores avaliados serão selecionados para apresentação em sessão especial no ERRC 2023. A avaliação final será realizada pelo Comitê de Avaliação e levará em conta a qualidade do artigo e também a apresentação do trabalho para a audiência.
    
    **•Melhor Apresentação:** Será definida baseado em voto popular. Teremos um formulário divulgado durante o evento para que os participantes votem em qual foi a melhor apresentação.
  `;

  const titulo2 = 'Comitê de Avaliação:';
  const texto2 = `A definir`
  return (
    <div className='Container-Premiacoes'>
        <BlueBar title="Premiacoes" />
        <TextoFormatado title={titulo1} text={texto1} />
        <TextoFormatado title={titulo2} text={texto2} />
        
    </div>
  )
}

export default Premiacoes