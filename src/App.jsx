import { index } from "./services/starshipService.js";
import StarshipSearch from "./components/StarshipSearch/StarShipSearch.jsx";
import StarshipList from "./components/StarshipList/StarshipList.jsx";
import { useEffect, useState } from "react";

const App = () => {
	//states
	const [starshipsData, setStarshipsData] = useState([]);
	const [displayedStarships, setDisplayedStarships] = useState([]);
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
		<section className="container centered">
			<StarshipSearch />
			<StarshipList starships={displayedStarships} />
		</section>
	);
};

export default App;
