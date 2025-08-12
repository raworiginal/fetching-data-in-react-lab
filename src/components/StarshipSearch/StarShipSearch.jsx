import { useState } from "react";
const StarshipSearch = (props) => {
	const [searchText, setSearchText] = useState("");
	const handleChange = (e) => {
		setSearchText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		props.setQuery(searchText);
		props.filterShips(searchText);
		setSearchText("");
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
					value={searchText}
					onChange={handleChange}
				/>
				<button type="submit">Search </button>
			</fieldset>
		</form>
	);
};

export default StarshipSearch;
