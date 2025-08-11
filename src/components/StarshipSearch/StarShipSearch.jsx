const StarshipSearch = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Search started...");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className="is-left" htmlFor="searchInput">
				<h2 className="title pico-background-amber-200">search starships:</h2>
			</label>
			<fieldset role="group">
				<input type="text" name="starshipName" id="starshipName" />
				<button type="submit">Search </button>
			</fieldset>
		</form>
	);
};

export default StarshipSearch;
