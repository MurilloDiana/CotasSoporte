import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import axios from 'axios';
import Global from './Global';
import Sidebar from './Sidebar';
import imageDefault from '../assets/images/imageDefault.png';



//1. Tenemos que recoger el id del articuo a editar en la url
//2. Crear un metodo para sacar ese objeto del backend
//3. Repoblar /rellenar el formulario con esos datos
//4. Actualizar el objeto haciendo una peticion al backend

class EditArticle extends Component {
    url = Global.url;
 
    articleId = null;

    titleRef=React.createRef();
    contentRef=React.createRef();
    state= {
        article:{},
        status:null,
        selectedFile:null
    }

    componentWillMount(){

        //recibimos los datos del id por parametros
        this.articleId = this.props.match.params.id;
        

      this.getArticle(this.articleId);

       this.validator = new SimpleReactValidator({
           messages:{
               alpha:'Solo letras porfis :V',
               required:'Se requiere este espacio lleno'
           }
       });
    }

    getArticle = (id)=>{
        axios.get(this.url +'article/'+id)
        .then(res=>{
            this.setState({article:res.data.article})
        })
    }

    changeState= () =>{
        this.setState({
            article:{
                title:this.titleRef.current.value,
                content:this.contentRef.current.value,
                image:this.state.article.image
            }
        }) 
        console.log(this.state);
    }


  



  saveArticle = (e) =>{
      e.preventDefault();

      this.changeState();
                   
      if(this.validator.allValid()){

      axios.put(this.url+'article/'+this.articleId,this.state.article)
        .then(res=>{
            if(res.data.article){
                this.setState({
                    article:res.data.article,
                    status:'waiting'
                });

                swal(
                    'Articulo Actualizado',
                    'el articulo ha sido actualizado correctamente',
                    'success'
                )
              
                if(this.state.selectedFile !== null){
                    
                    var articleId =  this.state.article._id;
                    
                    const formData = new FormData();

                    formData.append( //append lo vincula con un fichero
                        'file0',
                        this.state.selectedFile,
                        this.state.selectedFile.name
                    );
                  
                    //peticion ajax
                    axios.post(this.url + 'upload-image/' + articleId, formData )
                    .then(res=>{
                        if(res.data.article){
                            this.setState({
                                article:res.data.article,
                                status:'success'
                            });
                        }else{
                            this.setState({
                                article:res.data.article,
                                status:'failed'
                            });
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }else{
                    this.setState({
                        status:'success'
                    })
                }
            }else{
                this.setState({
                    status:'failed'
                })
            }
        })
    }else{
        this.setState({
            status:'failed'
        })
        this.validator.showMessages();
        this.forceUpdate();
    } 
  }
  fileChange=(event)=>{
      this.setState({
          selectedFile:event.target.files[0]
      });
      console.log(this.state)
  }


    render(){
        console.log(this.state.article)

        if(this.state.status === 'success'){
            return <Redirect to="/blog"/>;
        }
        var article = this.state.article;
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar Articulo</h1>
                    {this.state.article.title && 
                    <form className="mid-form" onSubmit={this.saveArticle}>

                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState}/>


                            {this.validator.message('title',this.state.article.title,'required|alpha')}

                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name ="content" defaultValue={article.content}ref={this.contentRef} onChange={this.changeState}></textarea>
                            {this.validator.message('content',this.state.article.content,'required')}
                        </div>
                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                      
                            <input type="file"   name="file0" onChange={this.fileChange}/>
                            <div className="image-wrap">
                        {
                            article.image !== null? (
                        <img src={this.url+'get-image/'+article.image} alt={article.title} className='thumb' />
                            ) :(
                        <img src={imageDefault}alt={article.title}  className='thumb'/>
                            )
                        }
                    </div>

                        </div>
                        <div className="clearfix"/>
                        <input type="submit" value="Guardar" className="btn btn-success"/>
                     </form>
                  }
                    {
                        !this.state.article.title && 
                        <h1 className="subheader">Cargando....</h1>
                     }
                </section>
                <Sidebar/>
            </div>
        )
    }
}
export default EditArticle;