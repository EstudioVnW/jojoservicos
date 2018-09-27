import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import gerarId from './services/gerar-id-aleatorio';
import criarDocumento from './services/criar-documento';
import registerServiceWorker from './registerServiceWorker';

const __SESSION_ID = gerarId();

const doc = criarDocumento();

console.log(__SESSION_ID);

ReactDOM.render(<App sessionId={__SESSION_ID} doc={doc} />, document.getElementById('root'));
registerServiceWorker();
