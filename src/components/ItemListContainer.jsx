import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
	const onAddItem = (count) => {
		console.log(typeof count);
		alert('${count} los articulos seran agregados al carrito.');
	};
	return <ItemCount stock ={5} initial ={1} onAdd={onAddItem}></ItemCount>;
};

export default ItemListContainer;