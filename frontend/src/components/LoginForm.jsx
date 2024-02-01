import React, { useCallback, useState } from "react";
import Card from "../utils/Card";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";

const inputClasses =
	"w-full py-1.5 px-2 rounded outline-none focus:outline-stone-500 -outline-offset-2";

const buttonClasses =
	"mt-4 bg-white font-bold w-full text-black rounded-md py-2 transition-all transform hover:bg-emerald-500 active:translate-y-0.5 shadow-none";

const LoginForm = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const actionData = useActionData();
	const navigation = useNavigation();

	const loggingIn = navigation.state === "submitting";
	// console.log(actionData);
	// if (actionData) console.log("actionData is truthy");

	const handleChange = useCallback((e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}, []);

	return (
		<Card>
			<h1 className="font-sans text-4xl font-bold">Login</h1>
			{!actionData ? (
				<p className="font-sans font-semibold text-stone-400">
					Enter your credentials to access your account
				</p>
			) : (
				<p className="font-sans font-semibold text-red-500">
					{actionData}
				</p>
			)}
			<Form
				method="post"
				action="/"
				className="font-semibold w-full font-sans text-left flex flex-col gap-4"
			>
				<label htmlFor="username" className="w-full">
					Username
				</label>
				<input
					type="text"
					id="username"
					name="username"
					onChange={handleChange}
					value={formData.username}
					className={`${inputClasses}`}
					placeholder="Enter your username"
					required
				/>
				<label htmlFor="password" className="w-full">
					Password
				</label>
				<input
					type="password"
					id="password"
					name="password"
					onChange={handleChange}
					value={formData.password}
					className={`${inputClasses}`}
					placeholder="Enter your password"
					required
				/>
				<button className={`${buttonClasses}`}>
					{!loggingIn ? "Login" : "Logging In..."}
				</button>
			</Form>
			<p>
				Don't have an account?{" "}
				<Link className="underline underline-offset-2" to="/signup">
					Signup
				</Link>
			</p>
		</Card>
	);
};

export default LoginForm;
