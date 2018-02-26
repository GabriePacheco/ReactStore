import React from 'react';
import { Link } from 'react-router-dom';
import * as request from 'superagent';

class Item extends React.Component {
	constructor (props){
		super(props);
		this.state = {id:"",  producto:[]}
	}
	componentDidMount (){
		var name = this.props.match.params.name
		this.setState({id: name});

		request
		.get("https://webnexu-dfce4.firebaseio.com/productos/.json")
		.then( res =>{
			
			var producto =  res.body.filter(prod => prod.nombre.toLowerCase().indexOf(name.toLowerCase()) >-1) ; 
				this.setState({producto: producto});
		
			}
		);		
	}
	render(){
		
		return (
			<div className= "container">
				<div className= "panel panel-default">
					<div className ="panel-body">
					  {this.state.producto.map((prod, i)=>
						<div key = {i}>
							<h1>{prod.nombre}</h1>
							<div className="col-md-6">
								<img src={`../../${prod.imagen}`} className="img-responsive" />

							</div>
							<div className="col-md-6">
								<p>Precio: <strong>{prod.precio} $</strong></p>
								<p>U.Disponibles: <strong>{prod.stock} </strong></p>
								<p> <strong>{prod.descripcion} </strong></p>
							</div>

						</div>
							
					
					 )}	
					</div>
				<Link to="/home" className="btn btn-default" >Atrás</Link>
				</div>	 
			</div>

		);
	}
}

export default Item;
