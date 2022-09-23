import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  nombreRef = React.createRef(); // aca se guardan las referencias que vienen desde los input y radiobutton
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoParriPolloRef = React.createRef();

  state = {
    user: {},
  };

  recibirFormulario = (e) => {
    e.preventDefault(); //esto hace que la pagina no recargue si no que solo envie los datos

    var genero = "hombre";
    this.generoHombreRef.current.checked
      ? (genero = this.generoHombreRef.current.value)
      : this.generoMujerRef.current.checked
      ? (genero = this.generoMujerRef.current.value)
      : (genero = this.generoParriPolloRef.current.value);

    var user = {
      nombre: this.nombreRef.current.value,
      apellidos: this.apellidosRef.current.value,
      bio: this.bioRef.current.value,
      genero: genero,
    };

    this.setState({ user: user });

    console.log(user);
    alert("Form Enviado");
    console.log(this.nombreRef.current.value); // de esta manera accedemos al objeto y al valor del objeto en concreto
  };
  render() {
    if (this.state.user.nombre) {
      var user = this.state.user;
    }

    return (
      <div id="formulario">
        <h1 className="subheader">Formulario</h1>

        {/* MOSTRAR DATOS DEL FORMULARIO */}
        {this.state.user.nombre && (
          <div id="user-data">
            <p>
              Nombre: <strong>{user.nombre}</strong>
            </p>
            <p>
              Apellidos: <strong>{user.apellidos}</strong>
            </p>
            <p>
              Bio: <strong>{user.bio}</strong>
            </p>
            <p>
              Genero: <strong>{user.genero}</strong>
            </p>
          </div>
        )}

        <div className="center">
          <div id="content">
            {/* CREAR FORMULARIO */}

            <form
              className="mid-form"
              onSubmit={this.recibirFormulario}
              //    onChange={this.recibirFormulario} tambien podemos agregar este evento que lo hace lo mismo pero de una forma mas reactiva con cambios en tiempo real
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellidosRef} />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
              </div>

              <div className="form-group radibuttons">
                <input
                  type="radio"
                  name="genero"
                  value="hombre"
                  ref={this.generoHombreRef}
                />{" "}
                Hombre
                <input
                  type="radio"
                  name="genero"
                  value="mujer"
                  ref={this.generoMujerRef}
                />{" "}
                Mujer
                <input
                  type="radio"
                  name="genero"
                  value="otro"
                  ref={this.generoParriPolloRef}
                />{" "}
                Otro
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>
          <Sidebar blog="false" />
        </div>
      </div>
    );
  }
}
export default Formulario;
