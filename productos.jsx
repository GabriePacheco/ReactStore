import React from 'react';
import * as request from 'superagent';
import { Link } from 'react-router-dom';

import Producto from './lista-productos.jsx';
class Productos extends  React.Component {
	constructor (){
		super ();
		this.state= {
			productos:[], 
			cantidad:1,
			buscador: ""	
		}
		this.buscar = this.buscar.bind(this);
		
	}
	componentDidMount (){
		request
		.get("https://webnexu-dfce4.firebaseio.com/productos/.json") 
		.then(res=> {
			this.setState({productos: res.body});
		});
		
	}
	buscar(e){
		let busqueda = e.target.value;
		this.setState({buscador: busqueda});
		request
		.get("https://webnexu-dfce4.firebaseio.com/productos/.json") 
		.then(res=> {

			var producto =  res.body.filter(prod => prod.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) >-1) ; 
				this.setState({productos: producto});
			
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
				 <div className="panel panel-body">	
				 	<div className="row" >
				 		<div className="col-md-6">	
							<h2  >Catalogo de productos</h2>
						</div>
						<div className ="col-md-6">
							<label>¿Que estás buscando </label>
							<input type="text" className="form-control" placeholder="Ingresa el nombre del producto" onChange={this.buscar}  value={this.state.buscador} />
						</div>	

					</div>
					<hr/>
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
			</div>
		);
	}
}
export default Productos;