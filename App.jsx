import React from "react";
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import Login from './login.jsx';
import Home from './home.jsx';
import Item from './item.jsx';
import Carrito from './carrito.jsx';

class App extends React.Component {
	render(){
		return(
			<div className="appClass" >
			
				<div>
			
					<Switch>					
						<Route exact path='/'  component= {Login}   />
						<Route path='/home'  component= {Home}   />
						           
					</Switch>
				</div>
			</div>

		);
	}
}



export default App;