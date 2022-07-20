import { useState, useEffect } from "react";

//spinner

const Spinner = () => {
	return (
		<div className="spinner">
			<div class="spinner-border" role="status">
			  <span class="visually-hidden">Loading...</span>
			</div>
		</div>
		)
}


//promise

const Promises = () =>{
	const [loading, setLoading] = useState(false);
	const condition = true;

	const promise = new Promise((resolve,reject) => {
		if (condition){
			setTimeout(() => resolve({ user: "userName" }), 3000);
		} else{
			setTimeout(() => reject("El usuario no se encontro"), 3000);
		}
	});

	useEffect(() => {
		setLoading(true);
		promise
			.then((res) => console.log("Promsesa cumplida",res))
			.catch((error) => console.log("Promesa rechazada",error))
			.finally(() => {
				console.log("Finalizado");
				setLoading(false);
			});
	}, []);

	if(loading) return <Spinner />;
	return(
	<>
	<h1> No hay promesas ejecutandose</h1>
	</>
)};

export default Promises;