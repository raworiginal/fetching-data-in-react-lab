import { useState } from "react";
const StarshipSearch = (props) => {
	const [query, setQuery] = useState("");

	const handleChange = (e) => {
		setQuery(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		props.filterShips(query);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="searchInput">
				<h2 className="title pico-background-amber-200">search starships:</h2>
			</label>
			<fieldset role="group">
				<input
					type="text"
					name="starshipName"
					id="starshipName"
					onChange={handleChange}
				/>
				<button type="submit">Search </button>
			</fieldset>
		</form>
	);
};

export default StarshipSearch;
