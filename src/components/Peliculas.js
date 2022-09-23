import React, { Component } from 'react'
// import MensajeEstatico from './MensajeEstatico'
import Pelicula from './Pelicula'
import Sidebar from './Sidebar'
import Slider from './Slider'

class Peliculas extends Component  {
    state={}

    componentWillMount(){
    alert("Se va a montar el componente")// este compila todo el codigo y luego lo envia ya cargado
    this.setState({
        peliculas:[
        
            {titulo:'Dragon Quest',
             image:'https://i.blogs.es/26b579/dragon-quest-your-story/1366_2000.jpeg'},
             {titulo:'One Piece gold',
             image:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/one-piece-film-gold.jpg?itok=ByMJN7Qm'},
             {titulo:'your name',
             image:'https://1.bp.blogspot.com/-GlNILz-_CsI/WOZ4OQD81lI/AAAAAAABVE0/N7tewguToB4wXfXl-ktyj5F34RZsF0ACgCLcB/s1600/your%2Bname.jpg'},
             {titulo:'ipman',
             image:'https://www.wingchunkwoonguanyu.es/wp-content/uploads/2019/06/Copia-de-Copia-de-Copia-de-Copia-de-Copia-de-Copia-de-Copia-de-Copia-de-Sifu-o-Shifu-1.jpg'},
    ],
    nombre:'Damian',
    favorita:{}
    }
  )
}

componentDidMount(){
    alert('se ha montado el componente')//este muestra directamente en la pantalla antes de compilarlo
}

componentWillUnmount(){
    alert("me voy a desmontar")
}
//esto no es una funcion es un metodo por eso mismo se debe llamar como this.cambiartitulo
cambiarTitulo = () => {
    var {peliculas}= this.state;
    var random = Math.floor(Math.random() * 3);
    alert(random)
    peliculas[0].titulo = "Dragon Quest : Your story";
    this.setState({
        peliculas:peliculas
    })
}

favorita =(pelicula,indice)=>{
    console.log("FAVORITA MARCADA");
    console.log(pelicula,indice)
    this.setState({
        favorita:pelicula
    })
}




    render(){
        //una ternaria para saber si va ahaber favorita o no
        var hayFavorita;
        this.state.favorita.titulo ?
        hayFavorita=(
        <h2>la peli favorita es {this.state.favorita.titulo}</h2>)
        :hayFavorita=(<h2>No hay peli favorita</h2>)

    return (
        <>
        
        <Slider
                 title="PELICULAS"
                 size="slider-small"
                 />
        <div className="center">
                <div id="content" className="peliculas">
                    <h2 className="subheader">Listado de Pelisss</h2>
                    <p>Seleccion de las pelis de {this.state.nombre}</p>
                    <div>
                        <button onClick={this.cambiarTitulo}>Cambiar titulo a DQ</button>
                    </div>
                    <p>
                        <span></span>
                    </p>
                    {/* Crear componente para ver las peliculas */}
        

                    <div id="articles" className="peliculas">{
                        this.state.peliculas.map((pelicula,i)=>{
                            return( 
                            
                        <Pelicula 
                        key={i} 
                        pelicula={pelicula}
                        indice={i}
                        marcarFavorita={this.favorita}/>//aca se recibe el componente del hijo
                        )
                        })
                    }
                        


                    </div>
                    {/* {this.state.favorita.titulo ?
                    <h2>la peli favorita es {this.state.favorita.titulo}</h2>
                    :<h2>No hay peli favorita</h2>} */}
            
                        {hayFavorita}  {/*// invocacion de la op ternaria */}
                </div>
                <Sidebar 
                blog="false"/>
        </div>
        </>
             )
            }
    }
export default Peliculas;
