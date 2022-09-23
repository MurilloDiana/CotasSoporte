import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Slider extends Component{
    render(){
        return(
            <div id="slider" className={this.props.size}>
            <h1>Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es</h1>
           
           {/* this.props.title esta recibiendo el argumento por props */}
           <h2>{this.props.title}</h2>
           {
               this.props.btn && <Link to="/blog" className="btn-white">{this.props.btn}</Link>
           }
        
        </div>
        )
    }
}
export default Slider;