export const Search = ({ search, setSearch }) => {
	return (
		<>
			<span>Search</span>
			<input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
		</>
	);
};