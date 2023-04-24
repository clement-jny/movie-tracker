import { MovieRow } from "./movieRow";

export const MoviesList = ({ movies }) => {
	return (
		<>
			{
				movies.map((movie) => (
					<MovieRow movie={movie} />
				))
			}
		</>
	);
};