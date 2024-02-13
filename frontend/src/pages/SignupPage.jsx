import { redirect, useNavigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import axios from "axios";
import { useUser } from "../hooks/useUser";
import { LoadingTxt } from "../utils/LoadingTxt";

const SignupPage = () => {
	const navigate = useNavigate();
	const user = useUser();

	if (user.loading) {
		return LoadingTxt;
	}

	if (user.userDetails) {
		navigate("/dashboard");
	}

	return <SignupForm />;
};

export default SignupPage;

export const action = async ({ request }) => {
	const data = await request.formData();
	const authData = {
		firstName: data.get("firstName"),
		lastName: data.get("lastName"),
		username: data.get("username"),
		password: data.get("password"),
	};
	// console.log(authData);
	const API = import.meta.env.VITE_BACKEND_API;
	// console.log(API);

	try {
		const { data } = await axios.post(
			// "http://localhost:3000/api/v1/user/signup",
			API + "user/signup",
			authData
		);

		// console.log(data.message);
		// console.log(data.token);

		localStorage.clear();
		localStorage.setItem("token", data.token);

		return redirect("/dashboard");
	} catch (error) {
		// console.log(error);
		// console.log(error.response.data.message);

		return error.response.data.message;
	}
};
