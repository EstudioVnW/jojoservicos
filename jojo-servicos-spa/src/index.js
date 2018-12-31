import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Router, Route } from 'react-router-dom';

import history from '../src/components/pages/history';

import './index.css';
import App from './App';
import Login from './components/Login';
import Admin from './components/pages/Admin';
import Documents from './components/pages/Documents';
import Jobs from './components/pages/Jobs';
import Business from './components/pages/Business';


import gerarId from './services/gerar-id-aleatorio';
import criarDocumento from './services/criar-documento';
import registerServiceWorker from './registerServiceWorker';

const __SESSION_ID = gerarId();

const doc = criarDocumento();

console.log(__SESSION_ID);

ReactDOM.render(
	<Router history={history}>
			<Switch>
				<Route exact path="/" render={ (props) => <App {...props} sessionId={__SESSION_ID} doc={doc} /> } />
				<Route path="/login" component={Login} />
				<Route path="/admin" component={Admin} />
				<Route path="/documents" component={Documents} />
				<Route path="/jobs" component={Jobs} />
				<Route path="/business" component={Business} />
			</Switch>
	</Router>, document.getElementById('root'));

registerServiceWorker();
