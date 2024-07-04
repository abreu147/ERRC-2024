// BlueBar.js
import React from 'react';
import './BlueBar.css';

const BlueBar = ({ title }) => {
  return (
    <div className="blue-bar">
      <h1>{title}</h1>
    </div>
  );
};

export default BlueBar;
