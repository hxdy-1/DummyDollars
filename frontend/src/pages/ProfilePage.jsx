import React from "react";
import Logout from "../components/Logout";
import Card from "../utils/Card";
import UpdateForm from "../components/UpdateForm";
import axios from "axios";
import { Link, redirect, useSearchParams } from "react-router-dom";
import DeleteUser from "../components/DeleteUser";

const ProfilePage = () => {
	const [searchParams] = useSearchParams();
	document.getElementById("root").style.justifyContent = "center";
	return (
		<Card>
			<h1 className="font-sans font-bold text-2xl md:text-4xl ">
				{searchParams.get("username")}
			</h1>
			<Link
				to="/dashboard"
				className="bg-white text-center font-bold w-full text-black rounded-md py-2 px-4 transition-all transform hover:bg-blue-500 hover:text-white active:translate-y-0.5 shadow-none"
			>
				⬅️ Go Back
			</Link>
			<UpdateForm />
			<Logout />
			<DeleteUser />
		</Card>
	);
};

export default ProfilePage;

export const action = async ({ request }) => {
	const data = await request.formData();
	const authData = {
		firstName: data.get("firstName"),
		lastName: data.get("lastName"),
		password: data.get("password"),
	};
	// console.log(authData);

	const token = localStorage.getItem("token");
	// console.log(token);

	try {
		const { data } = await axios.put(
			"http://localhost:3000/api/v1/user",
			authData,
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);

		console.log(data);
		localStorage.clear();

		return redirect("/");
	} catch (error) {
		console.log(error.response.data.message);
		return error.response.data.message;
	}
	// return null;
};
