import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import UsersList from "./UsersList";
import axios from "axios";

const MainDashboard = ({ balance, users }) => {
	const [initialUsers, setInitialUsers] = useState(users);
	const [allUsers, setAllUsers] = useState(users);
	const [filter, setFilter] = useState("");
	// console.log(filter?.length);

	useEffect(() => {
		axios
			.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
			.then((response) => {
				if (filter.length === 0) {
					// console.log(filter?.length);
					setInitialUsers(initialUsers);
					setAllUsers(initialUsers);
				} else {
					// console.log(response.data);
					setAllUsers(response.data);
				}
			});
	}, [filter]);

	return (
		<div className="font-sans text-white py-4 px-6 flex flex-col gap-6 mx-auto w-10/12 mt-28">
			<h3 className="font-semibold text-xl bg-black text-center py-4 rounded-md shadow-lg mx-auto w-1/4 flex justify-evenly">
				<span>My Balance:</span> <span> &#8377; {balance}/-</span>
			</h3>
			<h2 className="text-3xl font-semibold">All Users</h2>
			<SearchInput setFilter={setFilter} />
			<UsersList users={allUsers} />
		</div>
	);
};

export default MainDashboard;
