import React from 'react';
import { Link, Redirect , withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
class Login extends React.Component{
	constructor(){
		super();
		this.state = {email : '', pass:'', mensaje:''}; 
		this.validar = this.validar.bind(this) ;
		this.cambiar = this.cambiar.bind(this);
	}

	validar(event){
			event.preventDefault();
		if (this.state.email == "gabioh2012@gmail.com" && this.state.pass=="sex2004" ){
			console.log("Entro ");
			this.props.history.push("/home");
			
		} else{
			this.setState({mensaje:'Usuario y/o Contraseña no validos '}) ;
		}
	
	}
	cambiar(event) {
    	const target = event.target;
    	const value = target.type === 'checkbox' ? target.checked : target.value;
    	const name = target.name;

	    this.setState({
	      [name]: value, 
	      mensaje: ''
	    });
  	}
	render(){
		return(
			<div className = "container">
				<div className="row">
					<div className = "col-md-6 col-md-offset-3">
						<form onSubmit={this.validar} className="form-horizontal">
							<div className="form-group">
								<label>Correo Electrónico</label>
								<input type="email" className="form-control" name="email" id = "email" placeholder="Ingrese su E-mail" required  value = {this.state.email}  onChange ={this.cambiar}/>
							</div>
							<div className="form-group">
								<label>Contraseña</label>
								<input type="password" className="form-control" name="pass" id = "pass" placeholder="Ingrese su password"  required  value={this.state.pass} onChange ={this.cambiar}/>
							</div>

							<div className="form-group">
								<button className="btn btn-primary">Entrar</button>
								 
							</div>
							<div>{this.state.mensaje}</div>
			
						</form>
					</div>
				</div>	
			</div>
		);
	}
}
export default Login;