import StarshipCard from "../StarshipCard/StarshipCard.jsx";

const StarshipList = (props) => {
	return (
		<>
			{props.starships.map((starship, index) => {
				return <StarshipCard key={index} {...starship} />;
			})}
		</>
	);
};

export default StarshipList;
