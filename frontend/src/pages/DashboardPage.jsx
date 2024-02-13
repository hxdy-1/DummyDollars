import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import MainDashboard from "../components/MainDashboard";
import axios from "axios";
import { Await, useLoaderData, defer, useNavigate } from "react-router-dom";
import { LoadingTxt } from "../utils/LoadingTxt";
import { useUser } from "../hooks/useUser";

const DashboardPage = () => {
	const { data } = useLoaderData();
	document.getElementById("root").style.justifyContent = "flex-start";

	const navigate = useNavigate();
	const user = useUser();

	if (user.loading) {
		return LoadingTxt;
	}

	if (!user.userDetails) {
		return navigate("/");
	}

	return (
		<>
			<Suspense fallback={LoadingTxt}>
				<Await resolve={data}>
					{(data) => (
						<>
							<Navbar username={data.username} />
							<MainDashboard
								balance={data?.balance}
								users={data.usersArr}
							/>
						</>
					)}
				</Await>
			</Suspense>
		</>
	);
};

export default DashboardPage;

export const loadData = async () => {
	const token = localStorage.getItem("token");
	// console.log(token);
	// const API = process.env.REACT_APP_API;
	const API = import.meta.env.VITE_BACKEND_API;
	// console.log(API);

	try {
		const { data } = await axios.get(
			// "http://localhost:3000/api/v1/accounts/balance",
			API + "accounts/balance",
			{
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			}
		);

		// console.log("data: ", data);
		return data;
	} catch (error) {
		return token;
	}
};

export const loader = () => {
	return defer({
		data: loadData(),
	});
};
