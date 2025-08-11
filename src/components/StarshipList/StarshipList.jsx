import StarshipCard from "../StarshipCard/StarshipCard.jsx";

const StarshipList = (props) => {
	return (
		<article>
			{props.starships.map((starship, index) => {
				return <StarshipCard key={index} {...starship} />;
			})}
		</article>
	);
};

export default StarshipList;
