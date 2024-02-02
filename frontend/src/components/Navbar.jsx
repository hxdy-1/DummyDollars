import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ username }) => {
	const navigate = useNavigate();
	return (
		<nav className="bg-black font-sans flex justify-between items-center py-6 px-4 shadow-lg fixed top-0 w-full rounded-b-3xl md:rounded-b-full md:px-16 xl:px-32">
			<h1 className="text-white text-xl font-bold md:text-3xl  xl:text-4xl">
				DummyDollars💸
			</h1>
			<div className="flex gap-2 items-center md:gap-4">
				<h2 className="font-semibold text-sm md:text-base xl:text-lg">
					Hello👋, {username}
				</h2>
				<div
					onClick={() => navigate(`/profile?username=${username}`)}
					className="bg-slate-50 text-lg text-black font-bold rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition-all hover:bg-emerald-400 md:w-12 md:h-12 md:text-xl"
				>{`${username?.[0].toUpperCase() || "H"}`}</div>
			</div>
		</nav>
	);
};

export default Navbar;
