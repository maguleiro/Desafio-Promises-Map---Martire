import React, { useState } from "react";
import Person from "./Person/Person";

const Persons = () => {
	const [persons, setPersons] = useState([
		{
			id:1,
			name:"Eren",
			rol: "Principal",
			img:"https://shingeki-no-kyojin.fandom.com/es/wiki/Eren_Jaeger",
		},
		{
			id:2,
			name:"Mikasa",
			rol: "Principal",
			img:"https://www.geekmi.news/series/SNK-modelo-recrea-a-Mikasa-Ackerman-de-AOT-en-ropa-interior-20220214-0020.html",
		},
		{
			id:3,
			name:"Armin",
			rol: "Secundario",
			img:"https://shingeki-no-kyojin.fandom.com/es/wiki/Armin_Arlert",
		},
	]);

	return (
		<div className= "base">
			{persons.map((person) => {
				return (<Person key={person.id} name={person.name} img={person.img} rol={person.rol}/>
					);
			})}
		</div>
	);
};


export default Persons;