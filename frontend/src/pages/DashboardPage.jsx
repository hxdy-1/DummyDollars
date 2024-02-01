import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import MainDashboard from "../components/MainDashboard";
import axios from "axios";
import { Await, useLoaderData, defer } from "react-router-dom";

const DashboardPage = () => {
	const { data } = useLoaderData();

	return (
		<>
			<Suspense
				fallback={
					<h1
						style={{
							textAlign: "center",
							fontWeight: "bolder",
							fontSize: "1.2rem",
							marginTop: "10rem",
						}}
					>
						Loading...
					</h1>
				}
			>
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

	try {
		const { data } = await axios.get(
			"http://localhost:3000/api/v1/accounts/balance",
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
