import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/EstruturaDaPagina.css';
import reportWebVitals from './reportWebVitals';
import Aluno from './pages/Aluno';

ReactDOM.render(
  <React.StrictMode>
    <Aluno />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
