import React from 'react';
import * as request from 'superagent';
import { Link } from 'react-router-dom';

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
			
		});

	}
	masCantidad(e){
		e.preventDefault();
		

	}


	render(){
		return(
			<div className = "container">
				<h2  >Catalogo de productos</h2>
				<div className="row">
					{this.state.productos.map((prod,i)=>(
							<div  key={i} className="col-md-3 ">
								<div className ="thumbnail"	>
									<h3>{prod.nombre}</h3>
									<img src={prod.imagen}  className="img-responsive"/>
									<p>Precio: <strong> ${prod.precio}</strong> </p>
									<p>U. Disponibles:  <strong> {prod.stock}</strong> </p>
									<div className="row">
										<div className="col-md-4"><Link to = "/home/item/${prod.nombre}" className="btn btn-primary">Ver Mas</Link> </div>
										<div className="col-md-4"><a onMouseUp = {this.props.addUp} onClick={this.props.add( prod[i])}className="btn btn-danger">Agregar</a> </div>
										<div className="col-md-4"><input  type="number"  className ="form-control" /></div>
									</div>
								</div>
							</div>
					))}
				</div>
		
			</div>
		);
	}
}
export default Productos;