import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListItem = ({ user }) => {
	const navigate = useNavigate();
	return (
		<li className="font-sans bg-black py-4 px-4 rounded-md shadow-lg flex justify-between">
			<div className="flex gap-4 items-center">
				<div className="bg-slate-50 text-black font-bold rounded-full w-10 h-10 flex justify-center items-center">
					{user.username?.[0].toUpperCase()}
				</div>
				<p className="text-white font-semibold text-xl">
					{user.username}
				</p>
			</div>
			<button
				onClick={() =>
					navigate(`/send?id=${user._id}&name=${user.firstName}`)
				}
				className="bg-white text-black py-1 px-2 rounded-md shadow-lg font-bold transition-all hover:bg-emerald-400"
			>
				Send Money
			</button>
		</li>
	);
};

export default ListItem;
