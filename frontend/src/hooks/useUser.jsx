import axios from "axios";
import { useEffect, useState } from "react";

export const useUser = () => {
	const [loading, setLoading] = useState(true);
	const [userDetails, setUserDetails] = useState(null);

	const API = import.meta.env.VITE_BACKEND_API;
	console.log(API);

	async function getDetails() {
		try {
			const { data } = await axios.get(
				// "http://localhost:3000/api/v1/user/me",
				API + "user/me",
				{
					headers: {
						Authorization:
							"Bearer " + localStorage.getItem("token"),
					},
				}
			);

			console.log("data from useUser: ", data);
			setUserDetails(data);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	}

	useEffect(() => {
		getDetails();
	}, []);

	return { loading, userDetails };
};
