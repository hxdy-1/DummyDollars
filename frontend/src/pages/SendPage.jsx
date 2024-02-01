import React from "react";
import SendMoney from "../components/SendMoney";
import axios from "axios";
import { redirect } from "react-router-dom";

const SendPage = () => {
	return <SendMoney />;
};

export default SendPage;

export const action = async ({ request }) => {
	const data = await request.formData();
	const amount = data.get("amount");

	const searchParams = new URL(request.url).searchParams;
	const id = searchParams.get("id");

	const token = localStorage.getItem("token");

	// console.log("amount: ", amount);
	// console.log("id: ", id);
	// console.log("token", token);

	try {
		const { data } = await axios.post(
			"http://localhost:3000/api/v1/accounts/transfer",
			{ to: id, amount },
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);

		console.log(data);
		console.log(data.message);
		return redirect("/dashboard");
	} catch (error) {
		console.log(error.response.data.message);
		return error.response.data.message;
	}
};
