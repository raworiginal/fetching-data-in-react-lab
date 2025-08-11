const StarshipCard = ({ name, starship_class, manufacturer, model }) => {
	return (
		<article>
			<h4 className="title">{name}</h4>
			<p>Class: {starship_class}</p>
			<p>Manufacturer: {manufacturer}</p>
			<p>Model: {model} </p>
		</article>
	);
};

export default StarshipCard;
