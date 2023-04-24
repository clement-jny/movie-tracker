import { Link } from "react-router-dom";

export const MovieRow = ({ movie }) => {
	return (
		<>
			<p>{movie.Title}</p>
			<Link to={`/movie/${movie.imdbID}`}>See more</Link>
		</>
	);
};