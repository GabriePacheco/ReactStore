import React from 'react';
import Barra from './barra.jsx';

class App extends React.Component{
	constructor(){
		super()
		
	}
  render(){
      return(
          <div calss="appContenido">
            <Barra></Barra>
            
          </div>

        );
  }
 

 }

export default App;