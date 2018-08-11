import React, { Component } from 'react';
import { fetchItems } from './utils';
import ClimaCiudad from '../ClimaCiudad';
import './clima.css';

class ClimaApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      ciudad: {
        weather: [''],
        main: {},
        wind: {},
      },
      valorInput:'',
    };
  }

  componentWillMount(){
    const {valorInput} = this.state;

    fetch('https://ipinfo.io/json')
      .then( obtenido => obtenido.json())
      .then ( city => {

        this.setState({
          valorInput: city.city
        })

        fetchItems(city.city)
          .then(ciudad => this.setState({ciudad}))
      });

    }

   onClick() {
    const {
      valorInput, 
      ciudad } = this.state;
      if(valorInput !== ''){
        fetchItems(valorInput)
          .then(ciudad => this.setState({ciudad}))
          .catch(function(e){
            alert('Verifique que ha ingresado una ciudad valida')
          });
      }else{
        alert('Ingrese una ciudad')
      }
  }

  render() {
    const {ciudad, valorInput} = this.state;
    return (
      <div>
       <ClimaCiudad ciudad = {ciudad} />
       <div className='input'>
         <input
            type="text"
            value={valorInput}
            // ref={node => this.input = node}
            onChange={
              e => this.setState({
                valorInput: e.target.value,
              })
            }
          />
          <button className="boton" onClick={this.onClick.bind(this)}>{'Buscar'}</button>
        </div>
      </div>
    );
  }
}

export default ClimaApp;
