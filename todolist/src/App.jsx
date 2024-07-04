import React from 'react';
import "./App.css";
import { Outlet } from 'react-router-dom';
import Header from './components/HeaderF/Header.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../src/components/Footer/Footer.jsx'

function App() {
  return (
    <div className='App'>
        <Header/>
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;