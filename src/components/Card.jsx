import ItemListContainer from "./ItemListContainer";

const Card = ({ name, precio, img }) =>{
	return(
	<div className="card-group p-2">
	<div className="card" style={{width:"18rem"}}>
	<img class="card-img-top" src={img}/> 
	  	<div className="card-body">
		    <h5 className="card-title">{name}</h5>
		    <p className="card-text">${precio}</p>
		    <ItemListContainer />
	  	</div>
	</div>
	</div>

 	);
}

export default Card;
