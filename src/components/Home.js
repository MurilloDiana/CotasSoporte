import React, { Component } from 'react'
import Articles from './Articles';
import Sidebar from './Sidebar';
import Slider from './Slider';
class Home extends Component{
    render(){

        var buttonString = "Ver Mas";


        return(
        <div id="home" >
             <Slider
                        title="Slider por Props"
                        btn={buttonString}
                        size="slider-big"/>
                        <div className="center">
                            <div id="content">
                                <h1 className="subheader">Ultimos Articulos</h1>
                                <Articles
                                home="true"
                                />
                            </div>
                        </div>{/*  END DIV CENTER */}
                        <Sidebar/>
        </div>
        )
    }
}
export default Home;