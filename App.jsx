import React from 'react';
import Barra from './barra.jsx';
import Productos from './productos.jsx';

class App extends React.Component{
	constructor(){
		super()
		
	}
  render(){
      return(
          <div calss="appContenido">
            <Barra></Barra>
            <Productos> </Productos>
          </div>

        );
  }
 

 }

export default App;