// importan el hook useState

import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	// useState() retornar un array[variable, funcion]


	let contador = 1

	function agregar(){
		console.log("agregar")
		console.log(contador)
		contador = contador + 1
		console.log(contador);
	}

	return (
		<>
			<h1 className="text-center mt-5">Bienvenidos a React Hooks </h1>
			<button onClick={agregar}>Agregar</button>
			<p> {contador}</p>
		</>
	);
};

export default Home;
