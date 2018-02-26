import React from 'react';
import Barra from './barra.jsx';
import { Link } from 'react-router-dom';
class Carrito extends React.Component {

	constructor (props){
		super(props);
		this.state ={
				total :0
		}	

	}
	componentDidMount (){
		var subTotal = 0;
		this.props.compras.map((suma)=> {
			subTotal += suma.prod.precio;
		}
		);
		this.setState({total: subTotal});
		
	}
	
	render(){
		const tot =this.state.total;
		console.log(this.state.total)
		return (
			<div className="container">
				<div className="panel panel-body">
					<h3>Carrito </h3>
					<div className="row">
						<div className="col-md-8">
							{this.props.compras.map((compra, i)=>
								<div key = {i} className="row thumbnail">
									<div className="col-md-4">
										<img src={`../${compra.prod.imagen}`} className="img-responsive" />
									</div>
									<div className="col-md-8">
										<h4>{compra.prod.nombre}</h4>
										<p>Precio: <strong> {compra.prod.precio}</strong></p>
									</div>
								</div>
							)}
						</div>
						<div className="col-md-4">
							<h3>Total: <strong>{this.state.total}$</strong></h3>
							<div className="text-center">
								<Link to = "/home" className="btn btn-default" >Canccelar</Link>
								<Link to = "/home" className="btn btn-default" onClick={this.props.onPago} >Pagar </Link>	
							</div>
						</div>		

					</div>
				</div>	
			</div>
		);
	}
}

export default Carrito;
