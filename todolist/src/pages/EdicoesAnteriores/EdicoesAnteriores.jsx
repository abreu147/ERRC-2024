import React from 'react'
import './EdicoesAnteriores.css'
import TextoFormatado from '../../components/TextoFormatado/TextoFormatado.jsx';
import BlueBar from '../../components/BlueBar/BlueBar.jsx';



const titulo1 = `Edições Anteriores`;
const texto1 = ` **•** 2023 – Porto Alegre – UFRGS
**•** 2021 – Virtual – IFSul campus Charqueadas
**•** 2020 – Virtual – UDESC/Unipampa
**•** 2019 – Alegrete – Unipampa
**•** 2018 – Pelotas – SENAC
**•** 2017 – Santa Maria – UFSM
**•** 2016 – Porto Alegre – SENAC
**•** 2015 – Passo Fundo – IMED
**•** 2014 – Canoas – Unilasalle
**•** 2013 – Porto Alegre – PUCRS
**•** 2012 – Pelotas – UFPEL
**•** 2011 – São Leopoldo – Unisinos
**•** 2010 – Alegrete – Unipampa
**•** 2009 – Três de Maio – Setrem
**•** 2008 – Porto Alegre – Uniritter
**•** 2007 – Santa Maria – UFSM
**•** 2006 – Passo Fundo – UPF
**•** 2005 – Santa Cruz do Sul – UNISC
**•** 2004 – Canoas – UNILASSALE
**•** 2003 – Porto Alegre – UFRGS (1ª edição)
`

function EdicoesAnteriores() {
  return (
    <div className='EdicoesAnteriores-div'>
      <BlueBar title="Edições Anteriores" />
      <TextoFormatado title={titulo1} text={texto1} />
      {/* <TextoFormatado title={} text={} /> */}
    </div>
    

  )
}

export default EdicoesAnteriores