import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/EstruturaDaPagina.css';
import reportWebVitals from './reportWebVitals';
import Aluno from './pages/Aluno';
import { criarServidor } from './services/mirage-server';

if (process.env.NODE_ENV !== "production") {
  criarServidor({ environment: process.env.NODE_ENV });
}

ReactDOM.render(
  <React.StrictMode>
    <Aluno />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
