import React, { Component } from 'react';
class Formulario extends Component {
    nombreEventoRef = React.createRef();
    categoriaRef = React.createRef();
    buscarEvento= e=>{
        e.preventDefault();
        //Crear el objeto
        const datosBusqueda = {
            nombre : this.nombreEventoRef.current.value,
            categoria : this.categoriaRef.current.value
        }
        this.props.obtenerEventos(datosBusqueda);
        //pasarlo por Porps

    }
    mostrarOpciones=(key)=>{
        const categoria = this.props.categorias[key];
        const {id, name_localized} = categoria;
        if(!id || !name_localized) return null;
        return(
            <option key={id} value={id}>{name_localized}</option>
        )
    }
    render() { 
        const categorias = Object.keys(this.props.categorias);
        return (
            <div>
                <form onSubmit={this.buscarEvento}>
                    <fieldset className="uk-fieldset uk-margin">
                        <legend className="uk-legend uk-text-center">
                            Busca tu evento por nombre o categoria
                        </legend>
                        <div className="uk-column-1-3@m uk-margin">
                            <div className="uk-margin" uk-margin="true">
                                <input ref={this.nombreEventoRef} className="uk-input" type="text" placeholder="Nombre de Evento o Ciudad"/>
                            </div>
                       
                        <div className="uk-colum-1-3@m uk-margin" >
                           <select ref={this.categoriaRef} className="uk-select">
                              {categorias.map(this.mostrarOpciones)}  

                           </select>
                        </div>
                        <div className="uk-colum-1-3@m uk-margin">
                            <button className="uk-button uk-button-danger">Buscar</button>
                        </div>
                    </div>
                    </fieldset>
                </form>
            </div>
          );
    }
}
export default Formulario;