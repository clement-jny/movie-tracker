import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const [isFound, setIsFound] = useState(false);
	const [notFoundError, setNotFoundError] = useState("");

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?apikey=acb16081&t=${id}`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(res.status);
				}
			})
			.then((res) => {
				if (res.Response === "True") {
					setMovie(res.Search);
					setIsFound(true);
				} else {
					setIsFound(false);
					setNotFoundError(res.Error);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [])

	return (
		<p>{movie.Title}</p>
	);
};