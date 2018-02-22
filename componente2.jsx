import React from 'react';

class Componente2 extends React.Component{
	constructor (){
		super ()
		
	}
    render(){
        return(
        	<div>
       			
       			<div>
       				<h3>{this.props.mensajeProps}</h3>
              <h4>{this.props.mensaje3}</h4>
              <button onClick = {this.props.cambiarStado}> Cambiar</button>
       			</div>
			</div>	
		
        )
   }

   
 }
 Componente2.defaultProps = {
  mensaje3 : "Este es un props por deffecto "
 }

export default Componente2;