const BASE_URL = "https://swapi.info/api/starships";

const index = async () => {
	try {
		const res = await fetch(BASE_URL);
		if (!res.ok) throw new Error("Failed to fetch starships");
		const starships = await res.json();
		return starships;
	} catch (error) {
		console.error(error);
	}
};

export { index };
