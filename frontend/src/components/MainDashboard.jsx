import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import UsersList from "./UsersList";
import axios from "axios";

const MainDashboard = ({ balance, users }) => {
	// console.log("MainDashboard: ", users);
	const [initialUsers, setInitialUsers] = useState(users);
	const [allUsers, setAllUsers] = useState(users);
	const [filter, setFilter] = useState("");
	// console.log(filter?.length);

	const API = import.meta.env.VITE_BACKEND_API;
	// console.log(API);

	useEffect(() => {
		axios
			// .get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
			.get(`${API}user/bulk?filter=${filter}`)
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
		<div className="font-sans text-white py-4 flex flex-col gap-6 mx-auto w-full mt-20 md:mt-10 lg:mt-32">
			<h3 className="font-semibold text-xl bg-black text-center py-4 px-2 rounded-md shadow-lg mx-auto flex justify-evenly gap-2 md:text-2xl md:px-4">
				<span>💰 My Balance: </span>
				<span> &#8377; {balance}/-</span>
			</h3>
			<h2 className="text-xl font-semibold md:text-3xl md:font-bold xl:text-4xl">
				👪 All Users
			</h2>
			<SearchInput setFilter={setFilter} />
			<UsersList users={allUsers} />
		</div>
	);
};

export default MainDashboard;
