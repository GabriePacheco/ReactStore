import  React from  'react';
import { Link } from 'react-router-dom';
class Barra extends React.Component {
  constructor (){
    super()
    this.state = {
      totalCarrito : 0
    }
  }
  render(){
    return (
       <nav className="navbar navbar-default">
        <div className="container-fluid">
          
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">La Mejor Tienda </a>
          </div>

         
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           
          
            <ul className="nav navbar-nav navbar-right">
              
              <li><a href="#"><i className="glyphicon glyphicon-th">
            
              </i></a></li>
              

              <li><Link to ="/carrito"><i className="glyphicon glyphicon-shopping-cart">
              <span className="label label-danger">{this.state.totalCarrito}</span>
              </i></Link></li>

                 <li><Link to ="/"><i className="glyphicon glyphicon-log-out">

              </i></Link></li>
               
            </ul>
          </div>
        </div>
      </nav>

      );
  }


}

export default Barra;