import React from "react";
import ListItem from "./ListItem";

const UsersList = ({ users }) => {
	// console.log(users);

	return (
		<>
			{users.length === 0 && (
				<h2 className="font-sans font-semibold text-lg mx-auto">
					No users found ☹️
				</h2>
			)}
			{users.length !== 0 && (
				<ul className="flex flex-col gap-4 mt-2">
					{users?.map((user, index) => (
						<ListItem
							className="bg-black px-2 py-2 shadow-lg rounded-md"
							key={index}
							user={user}
						/>
					))}
				</ul>
			)}
		</>
	);
};

export default UsersList;
