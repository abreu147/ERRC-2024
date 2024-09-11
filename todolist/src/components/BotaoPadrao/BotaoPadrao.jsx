// ButtonLink.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/Inscricoes/Inscricoes.css';

const ButtonLink = ({ name, route }) => {
  return (
    <Link className='Inscricao-bt' to={route}>
      {name}
    </Link>
  );
};

export default ButtonLink;
