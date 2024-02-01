import { redirect } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import axios from "axios";

const SignupPage = () => {
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

	try {
		const { data } = await axios.post(
			"http://localhost:3000/api/v1/user/signup",
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
