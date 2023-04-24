import { useEffect, useState } from "react";
import { MoviesList } from "../Movies/moviesList";
import { Search } from "../Search/search";

export const Home = () => {
	const [searchValue, setSearchValue] = useState("");
	const [movies, setMovies] = useState([]);
	const [isFound, setIsFound] = useState(false);
	const [notFoundError, setNotFoundError] = useState("");

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?apikey=acb16081&s=${searchValue}`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(res.status);
				}
			})
			.then((res) => {
				if (res.Response === "True") {
					setMovies(res.Search);
					setIsFound(true);
				} else {
					setIsFound(false);
					setNotFoundError(res.Error);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [searchValue]);

	return (
		<>
			<div>
				<Search search={searchValue} setSearch={setSearchValue} />
			</div>

			<div>
				{
					isFound ? <MoviesList movies={movies} /> : <p>{notFoundError}</p>
				}
			</div>
		</>
	);
};