import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Pelicula extends Component{

  //esto es para enviar al componente padre la pelicula favorita
     marcarFav = ()=>{
         this.props.marcarFavorita(this.props.pelicula  , this.props.indice);
                 }



    render(){
       

        //aca recibe las props desde peliculas
        const {titulo,image} = this.props.pelicula;


        return(
            <article className="article-item" id="article-template">
            <div className="image-wrap">
                {/* <img src={pelicula.image} alt={pelicula.titulo}/> debido a la desestructuracion de arriba ahora se escribe : */}
                <img src={image} alt={titulo}/>
            </div>

            <h2>{titulo}</h2>
            <span className="date">
                Hace 5 minutos
            </span>
            <Link to={'/blog/'} >Leer más</Link>
             
             {/* aqui se envia al componente padre */}
            <button onClick={this.marcarFav}>Marcar como Favorita</button>

            <div className="clearfix"></div>
        </article>
        )
    }
}

export default Pelicula;
