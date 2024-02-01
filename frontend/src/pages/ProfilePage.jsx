import React from "react";
import Logout from "../components/Logout";
import Card from "../utils/Card";
import UpdateForm from "../components/UpdateForm";
import axios from "axios";
import { redirect } from "react-router-dom";
import DeleteUser from "../components/DeleteUser";

const ProfilePage = () => {
	return (
		<Card>
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
