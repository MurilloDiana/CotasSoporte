import React, { Component } from 'react'
import Articles from './Articles';
import Sidebar from './Sidebar';
import Slider from './Slider';


class Search extends Component{

    render(){
console.log(this.props)

var searched = this.props.match.params.search;
        return(
        
        <div id="blog" >
                <Slider
                        title={'Busqueda: '+searched}
                        size="slider-small"

                        />
                        <div className="center">
                            <div id="content">
                                {/*LISTADO DE ARTICULOS QUE VENDRAN DE LA API REST DE NODE*/}
                                <h1 className="subheader">SEASRC</h1>
                                <Articles
                                search={searched}/>
                            </div>
                        </div>{/*  END DIV CENTER */}
                        <Sidebar
                        blog="true"/>
        </div>
        )
    }
}
export default Search;