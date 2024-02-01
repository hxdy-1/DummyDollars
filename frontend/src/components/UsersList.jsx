import React, { useState } from "react";
import ListItem from "./ListItem";

const UsersList = ({ users }) => {
	// console.log(allUsers);

	const handleClick = (element) => {
		console.log(element);
	};

	return (
		<ul className="flex flex-col gap-4 mt-2">
			{users?.map((user, index) => (
				<ListItem
					className="bg-black px-2 py-2 shadow-lg rounded-md"
					key={index}
					user={user}
					onButtonClick={handleClick}
				/>
			))}
		</ul>
	);
};

export default UsersList;
