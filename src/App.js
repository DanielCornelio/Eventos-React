import React,{Component} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Eventos from './components/Eventos';
import PropTypes from 'prop-types';
class App extends Component {

  token = '6OMXKGF2H7KAXVDIVA56&locale';
  ordenar = 'date';
  state = {
    categorias: [],
    eventos:[]
  }
  componentDidMount(){
    this.obtenerCategorias();
  }
  obtenerCategorias = async ()=>{
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_Es`;
    await fetch(url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(categorias=>{
      this.setState({
        categorias : categorias.categories
      })
    })
  }
  obtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_Es`;
    await fetch(url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(eventos=>{
      this.setState({
        eventos : eventos.events
      })
    })
  }
  
  render(){
  return (
    <div className="App">
     <Header/>

     <div className="uk-container">
      <Formulario
        categorias = {this.state.categorias}
        obtenerEventos = {this.obtenerEventos}
      />
      <Eventos
        eventos={this.state.eventos}
      />
     </div>
    </div>
  );
}
}
Formulario.propTypes = {
  obtenerEventos : PropTypes.func.isRequired,
  categorias: PropTypes.array.isRequired
}
export default App;
