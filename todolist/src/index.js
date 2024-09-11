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
import ChamadaWrseg2024 from './pages/ChamadaWrseg2024/ChamadaWrseg2024.jsx';
import ChamadaErrc2024 from './pages/ChamadaErrc2024/ChamadaErrc2024.jsx';
import SugestoesAutores from './pages/SugestoesAutores/SugestoesAutores.jsx';
import Localizacao from './pages/Localizacao/Localizacao.jsx';
import Hospedagem from './pages/Hospedagem/Hospedagem.jsx';
import Alimentacao from './pages/Alimentacao/Alimentacao.jsx';
import EdicoesAnteriores from './pages/EdicoesAnteriores/EdicoesAnteriores.jsx';
import Edicao2024 from './pages/Edicao2024/Edicao2024.jsx';
import ComiteAcessor from './pages/ComiteAcessor/ComiteAcessor.jsx';




import WRSeg from './pages/WRSeg/WRSeg.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "inscricoes",
          element: <Inscricoes />
        },
        {
          path: "programacao",
          element: <Programacao />
        },
        {
          path: "premiacoes",
          element: <Premiacoes />
        },
        {
          path: "chamadaWrseg2024",
          element: <ChamadaWrseg2024 />
        },
        {
          path: "chamadaErrc2024",
          element: <ChamadaErrc2024 />
        },
        {
          path: "sugestoesAutores",
          element: <SugestoesAutores />
        },
        {
          path: "edicao2024",
          element: <Edicao2024 />
        },
        {
          path: "comiteAcessor",
          element: <ComiteAcessor />
        },
        {
          path: "hospedagem",
          element: <Hospedagem />
        },
        {
          path: "alimentacao",
          element: <Alimentacao />
        },
        {
          path: "edicoesAnteriores",
          element: <EdicoesAnteriores />
        },
        {
          path: "wRSeg",
          element: <WRSeg />
        },
        {
          path: "localizacao",
          element: <Localizacao />
        },
      ]
    }
  ],
  {
    basename: "/"
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
