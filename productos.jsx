import React from 'react';
import * as request from 'superagent'

import Producto from './lista-productos.jsx';
class Productos extends  React.Component {
	constructor (){
		super ();
		this.state= {
			productos:[], 
			cantidad:1

		}
		this.masCantidad = this.masCantidad.bind(this);
	}
	componentWillMount (){
		request
		.get("https://webnexu-dfce4.firebaseio.com/productos/.json") 
		.end((err, res)=>{
			if (err) console.log("Error al conectarse con la base de datos :",  err);

			this.state.productos = JSON.parse(res.text);
			console.log(this.state.productos);
		})
	}
	masCantidad(e){
		e.preventDefault();
		

	}

	render(){
		return(
			<div className = "container">
				<h2>Catalogo de productos</h2>
				<div className="row">
					{this.state.productos.map((prod,i)=>(
						<Producto key={i} nombre={prod.nombre} precio={prod.precio} stock={prod.stock} imagen={prod.imagen}  >
						</Producto>
					))}
				</div>
		
			</div>
		);
	}
}
export default Productos;