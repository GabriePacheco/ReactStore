import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './login.jsx';
import Barra from './barra.jsx';
import Productos from './productos.jsx';
import Carrito from './carrito.jsx';
import Item from './item.jsx';

const App = () => (

  <Router>
    
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
     
    </div>
  </Router>
);

const carrito = [];

const contarCarrito = () =>{
  return carrito.length;
}

const addCarrito = (objeto) => {
  carrito.push(objeto);
  console.log(carrito) ;
}


var contador = 0
const actualizarContador = ()=> {
    contador = contador +1 ;
    console.log ("se Debe Actualizar a " , contarCarrito(), carrito);
}
const Home = ({ match }) => (
  <div>
     <Barra totalCarrito={contador}  ></Barra>

    <Route path={`${match.url}/carrito`} component={Carrito} />
    <Route path={`${match.url}/item/:name`} component={Item} />
    <Route
      exact
      path={match.url}
      render={() => <Productos add = {addCarrito} addUp = {actualizarContador}></Productos> }
    />
  </div>
);



export default App;