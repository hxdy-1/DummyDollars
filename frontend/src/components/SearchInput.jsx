import { useEffect, useRef } from "react";

const SearchInput = ({ setFilter }) => {
	const searchRef = useRef();
	useEffect(() => {
		searchRef.current.focus();
	}, []);

	return (
		<input
			ref={searchRef}
			onChange={(e) => setFilter(e.target.value)}
			className="bg-black text-white shadow-lg rounded-md py-2 px-4 w-full"
			type="text"
			placeholder="🔍 Search from all users..."
		/>
	);
};

export default SearchInput;
