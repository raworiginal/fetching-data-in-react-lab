import StarshipCard from "../StarshipCard/StarshipCard.jsx";

const StarshipList = (props) => {
	return (
		<>
			{props.query && <h4>Showing Results for: {props.query}</h4>}
			{props.starships.map((starship, index) => {
				return <StarshipCard key={index} {...starship} />;
			})}
		</>
	);
};

export default StarshipList;
