import React from 'react';
import ReactDom from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter, Route} from 'react-router-dom';
import App from './App.jsx';
import Login from './login.jsx';
import Carrito from './carrito.jsx';
import Item from './carrito.jsx';


ReactDom.render(
		(<BrowserRouter>
			<Switch>
				<Route exact path='/'  component= { Login } />
				<Route path='/app'  component= { App } />
				<Route path='/carrito'  component= { Carrito } />
				<Route path='/Item'  component= { Item } />
			</Switch>
		</BrowserRouter> ), 
		document.getElementById('app')
	);


