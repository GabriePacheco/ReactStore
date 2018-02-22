import React from 'react';
import { Link } from 'react-router-dom';

const  Producto = (props) => (
	<div className="col-md-3 thumbnail">
		<h3>{props.nombre}</h3>
		<img src={props.imagen}  className="img-responsive"/>
		<p>Precio: <strong> ${props.precio}</strong> </p>
		<p>U. Disponibles:  <strong> {props.stock}</strong> </p>
		<div className="row">
			<div className="col-md-3"><Link to = "/item/:{props.nombre}" className="btn btn-primary">Ver Mas</Link> </div>
			<div className="col-md-3"><a className="btn btn-danger">Agregar</a> </div>
			<div className="col-md-3"><input  type="number"  className ="form-control" /></div>
		</div>
	</div>					
);

export default Producto;