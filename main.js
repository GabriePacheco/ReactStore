import React from 'react';
import ReactDom from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter, Route} from 'react-router-dom';
import App from './App.jsx';
import Login from './login.jsx';
import Carrito from './carrito.jsx';
import Item from './item.jsx';


ReactDom.render(
		(<BrowserRouter>
			<Switch>
				<Route exact path='/'  component= { Login } />
				<Route exact path='/app'  component= { App } />
				<Route exact path='/carrito'  component= { Carrito } />
				<Route exact path='/item/:name'  component= { Item } />
			</Switch>
		</BrowserRouter> ), 
		document.getElementById('app')
	);


