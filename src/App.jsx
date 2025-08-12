import { index } from "./services/starshipService.js";
import StarshipSearch from "./components/StarshipSearch/StarShipSearch.jsx";
import StarshipList from "./components/StarshipList/StarshipList.jsx";
import { useEffect, useState } from "react";

const App = () => {
	//states
	const [starshipsData, setStarshipsData] = useState([]);
	const [displayedStarships, setDisplayedStarships] = useState([]);
	const [query, setQuery] = useState("");

	const filterShips = (query) => {
		const filteredStarships = starshipsData.filter((starship) => {
			return starship.name.toLowerCase().includes(query.toLowerCase());
		});
		setDisplayedStarships(filteredStarships);
	};

	// fetch data
	useEffect(() => {
		const fetchData = async () => {
			const data = await index();
			setStarshipsData(data);
			setDisplayedStarships(data);
		};
		fetchData();
	}, []);

	return (
		<section className="container">
			<StarshipSearch
				filterShips={filterShips}
				query={query}
				setQuery={setQuery}
			/>
			<StarshipList starships={displayedStarships} query={query} />
		</section>
	);
};

export default App;
