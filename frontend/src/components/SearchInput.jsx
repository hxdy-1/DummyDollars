const SearchInput = ({ setFilter }) => {
	return (
		<input
			onChange={(e) => setFilter(e.target.value)}
			className="bg-black text-white shadow-lg rounded-md py-2 px-4 w-full"
			type="text"
			placeholder="Search from all users..."
		/>
	);
};

export default SearchInput;
