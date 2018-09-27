import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import Login from './components/Login';
import Admin from './components/Admin';

import gerarId from './services/gerar-id-aleatorio';
import criarDocumento from './services/criar-documento';
import registerServiceWorker from './registerServiceWorker';

const __SESSION_ID = gerarId();

const doc = criarDocumento();

console.log(__SESSION_ID);

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={ (props) => <App {...props} sessionId={__SESSION_ID} doc={doc} /> } />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
