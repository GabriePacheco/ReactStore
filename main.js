import React from 'react';
import ReactDom from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter, Route, IndexRoute} from 'react-router-dom';
import App from './App.jsx';
import Login from './login.jsx';
import Carrito from './carrito.jsx';
import Item from './item.jsx';
import * as firebase from "firebase";

var configFire = {
  apiKey: "AIzaSyBvrOW3qgPH3pCKmx6FfRWNwfQR_7LOv1g",
  authDomain: "webnexu-dfce4.firebaseapp.com",
  databaseURL: "https://webnexu-dfce4.firebaseio.com",
  storageBucket: "webnexu-dfce4.appspot.com",
};

firebase.initializeApp(configFire);
var database = firebase.database();
	
	console.log(database);
ReactDom.render(
	<BrowserRouter>
		<App /> 
	</BrowserRouter>	
		,
		document.getElementById('app')
	);


