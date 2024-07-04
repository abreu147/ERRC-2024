import React from 'react';
import "./App.css";
import { Outlet } from 'react-router-dom';
import Header from './components/HeaderF/Header.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className='App'>
        <Header/>
        <Outlet />
    </div>
  );
}

export default App;