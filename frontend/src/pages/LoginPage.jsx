import { redirect } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import axios from "axios";

const LoginPage = () => {
	document.getElementById("root").style.justifyContent = "center";
	return <LoginForm />;
};

export default LoginPage;

export const action = async ({ request }) => {
	const data = await request.formData();
	const authData = {
		username: data.get("username"),
		password: data.get("password"),
	};
	// console.log(authData);
	const API = import.meta.env.VITE_BACKEND_API;
	// console.log(API);

	try {
		const { data } = await axios.post(
			// "http://localhost:3000/api/v1/user/signin",
			API + "user/signin",
			{
				username: authData.username,
				password: authData.password,
			}
		);

		// console.log(data.token);
		localStorage.clear();
		localStorage.setItem("token", data.token);

		return redirect("/dashboard");
	} catch (error) {
		console.log(error.response.data.message);
		return error.response.data.message;
	}
};
