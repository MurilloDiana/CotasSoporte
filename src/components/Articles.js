import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Global from './Global';
import Moment from 'react-moment'
import "moment/locale/es";//esto traducira todo el moment a  español



class Articles extends Component{
    url = Global.url;
    state={
        articles:[],
        status:null
    }

 componentWillMount(){
     var home= this.props.home;
     var search = this.props.search;

     if(home === 'true'){
         this.getLastArticles();
     }else if(search && search !== null && search !== undefined){
     this.getArticlesBySearch(search);
    }else{
     this.getArticles();
    }
 }
 getLastArticles = () =>{
     axios.get(this.url+"articles/last")
     .then(res =>{
         this.setState({
             articles:res.data.articles,
             status:'success'
         })
     })
 }
                        //se pasa el parametro de la busqueda
 getArticlesBySearch = (searched) =>{
    axios.get(this.url+"search/"+searched)
    .then(res =>{
        
        this.setState({
            articles:res.data.articles,
            status:'success'
        });
    })
    .catch(err=>{
        console.log(err.response.data)
        this.setState({
            articles:[],
            status:'success'
        });
    })
}

    getArticles =()=>{
        console.log('getArticles')
        axios.get(`${this.url}articles`)//funciona de la misma manera accediendo la url desde Global.js
        .then(res =>{
        this.setState({
            // articles:[]en caso q no venga nada,//res.data.articles   cuando haya articulos
            articles:res.data.articles,
            status:'success'
        });
        console.log(this.state)
    })
     
    }






    render(){
        if(this.state.articles.length >= 1) {
            var listArticles = this.state.articles.map((article)=>{
                return(
                  
                    <article key={article._id} className="article-item" id="article-template">
                        <div className="image-wrap">
                       { article.image !== null ?(
                       <img src={`${this.url}get-image/${article.image}`} alt={article.title} />
                        ):(
                            <img src="https://i.pinimg.com/originals/b6/40/69/b64069737abcaf6dc405535c80775572.jpg" alt={article.title} />
                        ) }
                        </div>
    
                        <h2>{article.title} </h2>
                        <span className="date">
                           <Moment locale="es" fromNow>{article.date}</Moment> {/*usando el fromNow accedemos a cambiar todo a  español*/}
                        </span>
                        <Link to={'/blog/articulo/'+article._id}>Leer más</Link>

                        <div className="clearfix"></div>
                    </article>
                   

                )
            })
        return(
        <div id="articles">
           {/* <h1>hay articulos</h1> */}
           {listArticles}
        </div>
        )
        }else if(this.state.articles.length === 0 && this.state.status === 'success'){
            return(
            <div id="articles">
            <h1 className="subheader">no hay articulos</h1>
         </div>
            )
        }else{
            return(
                <div id="articles">
                <h1 className="subheader">Aun no hay articulos,espere mientras carga el contenidos</h1>
             </div> 
            )
        }
}
}
export default Articles;