import React from 'react';
import './climaCiudad.css'


const ClimaCiudad = ({ ciudad}) => (
	<div>
		<div className ="fondito">
	  </div>
	  <div className="informacion">
	  	<div style={{padding:"1rem"}}>
		  	<h3> Temperatura: {ciudad.main.temp} Farenheit</h3>
		  	<h3> Cielo: {ciudad.weather[0].description} </h3>
		  	<h3> Velocidad viento: {ciudad.wind.speed} </h3>
		  	<h3> Humedad: {ciudad.main.humidity} </h3>
		</div>
	  </div>
  </div>
);

export default ClimaCiudad;
