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
		;
		
	}

	componentDidMount (){
		request
		.get("https://webnexu-dfce4.firebaseio.com/productos/.json") 
		.then(res=> {
			
			this.setState({productos: res.body});
		});
		

	}

	masCantidad(e){
		
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name] : value
		});

	}



	render(){

		return(
			<div className = "container">
				<h2  >Catalogo de productos</h2>
				<div className="row">
					{this.state.productos.map((prod,i)=>

							<div  key={i} className="col-md-3 col-xs-3 ">
								<div className ="thumbnail"	>
									<h3>{prod.nombre}</h3>
									<img src={prod.imagen}  className="img-responsive"/>
									<p>Precio: <strong> ${prod.precio}</strong> </p>
									<p>U. Disponibles:  <strong> {prod.stock}</strong> </p>
									<div className="row">
										<div className="col-md-6"><Link to = {`/home/item/${prod.nombre}`} className="btn btn-primary">Ver Mas</Link> </div>
										<div className="col-md-6"><a className="btn btn-warning" onClick={this.props.add}  onMouseUp={()=> this.props.addCarrito({prod})} >Agregar</a> </div>
									
									</div>
								</div>
							</div>
					)}
				</div>
		
			</div>
		);
	}
}
export default Productos;