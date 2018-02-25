import React from 'react';
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import Item from './item.jsx';
import Productos from './productos.jsx';
import Barra from './barra.jsx';
import Carrito from './carrito.jsx';
class Home extends React.Component {
	constructor (){
		super ();
		this.state = {
			carrito : [],
			totalCarrito :0
		}
		this.masCarrito = this.masCarrito.bind(this);
		
	}
	

	masCarrito (){
		
		
		this.setState ({
			totalCarrito: this.state.totalCarrito +1
		})
		
	}

	cargar (compra) {
	
		this.state.carrito.push(compra);

	}

	render () {
		return (
			<div>
				<Barra totalCarrito={this.state.totalCarrito} ></Barra>
				<Switch>		
					<Route exact  path='/home'   render={() => <Productos add={this.masCarrito} addCarrito = {this.cargar.bind(this)}></Productos>} />
					<Route path='/home/carrito'  render={()=> <Carrito compras={this.state.carrito} ></Carrito>} />
					<Route path='/home/item/:name'  component={Item}  />
				</Switch>
			</div>
		);
	}
}
export default Home;