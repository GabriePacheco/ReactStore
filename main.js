import React from 'react';
import ReactDom from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter, Route, IndexRoute} from 'react-router-dom';
import App from './App.jsx';
import Login from './login.jsx';
import Carrito from './carrito.jsx';
import Item from './item.jsx';


ReactDom.render(
	<BrowserRouter>
		<App /> 
	</BrowserRouter>	
		,
		document.getElementById('app')
	);


