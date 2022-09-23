import React, { Component } from "react";
import Articles from "./Articles";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Blog extends Component {
  render() {
    console.log(this.props);

    return (
      <div id="blog">
        <Slider title="Blogs" size="slider-small" />
        <div className="center">
          <div id="content">
            {" "}
            {/*LISTADO DE ARTICULOS QUE VENDRAN DE LA API REST DE NODE*/}{" "}
            <h1 className="subheader"> Ultimos Articulos </h1> <Articles />
          </div>{" "}
        </div>
        {/ * END DIV CENTER * /} <Sidebar blog="true" />
      </div>
    );
  }
}
export default Blog;
