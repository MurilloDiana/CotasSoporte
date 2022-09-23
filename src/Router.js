import React, { Component } from 'react';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import { Error } from './components/Error';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './pages/Blog';
import Formulario from './pages/Formulario';
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';


class Router extends Component{
    
    render(){
       
        return (
           
            <BrowserRouter>
            <Header/>

             {/*CONFIGURAR RUTAS Y PAGINAS */ }

            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/formulario" component={Formulario }/>
                <Route exact path="/peliculas" component={Peliculas }/>
                <Route exact path="/segunda-ruta" component={MiComponente }/>
                <Route exact path="/blog/busqueda/:search" component={Search}/>
                <Route exact path="/blog/articulo/:id" component={Article}/>
                <Route exact path="/blog/crear" component={CreateArticle}/>
                <Route exact path="/blog/editar/:id" component={EditArticle}/>
                <Route exact path="/redirect/:search" render={
                    (props) => {
                        var search = props.match.params.search;
                        return (<Redirect to={'/blog/busqueda/'+search}/>
                        )
                    }
                }/>

                <Route exact path="/pagina-1" render={()=>(
                <>
                <h1> Hello desde la ruta pagina 1</h1>
                  <MiComponente saludo="Hola amigo"/>
                 </>
                  )}/>

                 <Route exact path="/pruebas/:id/:nombre/:apellido" render={(props)=>{
                //al hacerlo asi podemos armar un file jsx como si lo hicieramos exteriormente

                var id= props.match.params.id;//asi recibimos el parametro de props que esta en pruebas
                var nombre=props.match.params.nombre;
                var apellido=props.match.params.apellido;
                     return (
                         <div id="content">
                             <h1 className="subheader">pagina de pruebas</h1>
                             <h2>{id}</h2>
                             <h2>
                                 {id && nombre && !apellido &&
                                 <>{nombre}</>}
                                 {
                                     id && nombre && apellido &&
                                     <>{nombre} {apellido}</>
                                 }
                             </h2>

                         </div>
                     )
                 }} />


                <Route  component={Error }/>


            </Switch>

           
       
       <div className="clearfix"></div>
       <Footer/>
    </BrowserRouter>
        )
    }
}

export default Router;
