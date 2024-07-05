import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from "./pages/Home/Home.jsx";
import Inscricoes from "./pages/Inscricoes/Inscricoes.jsx";
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Programacao from './pages/Programacao/Programacao.jsx';
import Premiacoes from './pages/Premiacoes/Premiacoes.jsx';
import ChamadaWrseg2023 from './pages/ChamadaWrseg2023/ChamadaWrseg2023.jsx';
import ChamadaErrc2023 from './pages/ChamadaErrc2023/ChamadaErrc2023.jsx';
import SugestoesAutores from './pages/SugestoesAutores/SugestoesAutores.jsx';
import WRSeg from './pages/WRSeg/WRSeg.jsx';

const router = createBrowserRouter([
 {
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: "/Studing-react",
      element: <Home/>
     },
     {
      path: "inscricoes",
      element: <Inscricoes/>
     },
     {
      path: "programacao",
      element: <Programacao/>
     },
     {
      path: "premiacoes",
      element: <Premiacoes/>
     },
     {
      path: "chamadaWrseg2023",
      element: <ChamadaWrseg2023/>
     },
     {
      path: "chamadaErrc2023",
      element: <ChamadaErrc2023/>
     },
     {
      path: "sugestoesAutores",
      element: <SugestoesAutores/>
     },
     {
      path: "wRSeg",
      element: <WRSeg/>
     },
  
  ]
 },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
