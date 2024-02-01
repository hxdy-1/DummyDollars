import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const Logout = () => {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const isLoggingOut = navigation.state === "submitting";
	const logoutHandler = (e) => {
		const confirmLogout = confirm("Do you want to logout?");
		// console.log(confirmLogout);

		if (confirmLogout) {
			localStorage.clear();
			navigate("/");
		}

		return;
	};
	return (
		<button
			onClick={logoutHandler}
			className="bg-white font-bold w-full text-black rounded-md py-2 px-4 transition-all transform hover:bg-red-500 active:translate-y-0.5 shadow-none"
		>
			{!isLoggingOut ? "Logout" : "Logging out..."}
		</button>
	);
};

export default Logout;
