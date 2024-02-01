import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ username }) => {
	const navigate = useNavigate();
	return (
		<nav className="bg-black font-sans flex justify-between items-center py-6 px-36 shadow-lg fixed top-0 w-full rounded-b-full">
			<h1 className="text-white text-4xl font-bold">DumBank</h1>
			<div className="flex gap-6 items-center">
				<h2 className="font-semibold">Hello, {username}</h2>
				<div
					onClick={() => navigate(`/profile?username=${username}`)}
					className="bg-slate-50 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all hover:bg-emerald-400"
				>{`${username?.[0].toUpperCase() || "H"}`}</div>
			</div>
		</nav>
	);
};

export default Navbar;
