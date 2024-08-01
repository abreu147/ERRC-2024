import '../../App.css';
import './Inscricoes.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InformacoesGerais from '../../components/TextoInscricoes/TextoInscricoes.jsx';
import BlueBar from '../../components/BlueBar/BlueBar.jsx';

function Inscricao() {
  return (
    <div className='Container-inscricao'>
        <BlueBar title="Inscrições" />
        <InformacoesGerais/>
        
    </div>
  )
}

export default Inscricao