import React, { Component } from 'react';
import MiComponente from './MiComponente';


class SeccionPruebas extends Component{
    contador = 0;
    //constructor(props){
    //     super(props);
    //     this.state ={
    //         contador:0
    //     };
    // }
    state ={
        contador:0
    }







 
        //var HolaMundo =()=>{ }
        HolaMundo(nombre,edad) {
            var presentacion = (
                <div>
                    <h2>Hola , soy {nombre }</h2>
                    <h3>tengo{edad }</h3>
                </div>
            );
            return presentacion;
        
        }

        sumar=(e)=>{

            this.setState({
                contador:(this.state.contador +1)
            })

        }

        restar=(e)=>{

            this.setState({
                contador:(this.state.contador -1)
            })

        }


        
        render(){
            var nombre = "Damian Morganti"
        return(
            <section id="content">
           <h2 className="subheader">Ultimos artículos</h2>
            <p>
            Funcion
            </p>
            {this.HolaMundo(nombre,12)}
           <section className="componentes">
               <h2 className="subheader">componentes</h2>
             <MiComponente/>
             {/* <Peliculas/> */}
           </section>
           <h2 className="subheader">Estado</h2>
           <p>
               {this.state.contador}
           </p>
           {/*  si definimos el metodo como un metodo alternativo ya no debemos usar el bind
           <input type="button" value="Sumar" onClick={this.sumar.bind(this)}/> */}
           <input type="button" value="Sumar" onClick={this.sumar}/>
           <input type="button" value="Restar" onClick={this.restar}/>
           </section>
        )
    }
}
export default SeccionPruebas;