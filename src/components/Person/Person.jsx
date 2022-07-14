import React from "react";

const Person = (props) => {
	return (
		<div>
			<img src={props.img}/>
			<h1>{props.name}</h1>
			<p>{props.rol}</p>
		</div>
	)
}

export default Person;