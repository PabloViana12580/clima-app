/*
------------- Pablo Viana 16091 ---------------
version: 1.0
clima - app
*/

const API_KEY = "dca286a2b9ad1327f2dab6a5adaed35e"	

export const fetchItems = (ciudad) => fetch(
  `http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${API_KEY}`,
).then(
  resultado => resultado.json(),
).then(
	getCiudad => getCiudad.list[0],
);