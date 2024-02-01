import React, { useCallback, useState } from "react";
import Card from "../utils/Card";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";

const inputClasses =
	"w-full py-1.5 px-2 rounded outline-none focus:outline-stone-500 -outline-offset-2";

const buttonClasses =
	"mt-4 bg-white font-bold w-full text-black rounded-md py-2 transition-all transform hover:bg-emerald-500 active:translate-y-0.5 shadow-none";

const SignupForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		password: "",
	});

	const actionData = useActionData();
	const navigation = useNavigation();
	const signingIn = navigation.state === "submitting";

	const handleChange = useCallback((e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}, []);

	return (
		<Card customStyles="my-8">
			<h1 className="font-sans text-4xl font-bold">Signup</h1>
			{!actionData ? (
				<p className="font-sans font-semibold text-stone-400">
					Enter your information to create an account
				</p>
			) : (
				<p className="font-sans font-semibold text-red-500">
					{actionData}
				</p>
			)}
			<Form
				method="post"
				action="/signup"
				className="font-semibold w-full font-sans text-left flex flex-col gap-4"
			>
				<label htmlFor="firstName" className="w-full">
					First Name
				</label>
				<input
					required
					onChange={handleChange}
					type="text"
					id="firstName"
					name="firstName"
					value={formData.firstName}
					className={`${inputClasses}`}
					placeholder="John"
				/>
				<label htmlFor="lastName" className="w-full">
					Last Name
				</label>
				<input
					required
					onChange={handleChange}
					type="text"
					id="lastName"
					name="lastName"
					value={formData.lastName}
					className={`${inputClasses}`}
					placeholder="Doe"
				/>
				<label htmlFor="username" className="w-full">
					Username
				</label>
				<input
					required
					onChange={handleChange}
					type="text"
					id="username"
					name="username"
					value={formData.username}
					className={`${inputClasses}`}
					placeholder="JohnDoe123"
				/>
				<label htmlFor="password" className="w-full">
					Password
				</label>
				<input
					required
					onChange={handleChange}
					type="password"
					id="password"
					name="password"
					value={formData.password}
					className={`${inputClasses}`}
					placeholder="Create a strong password"
				/>
				<button className={`${buttonClasses}`}>
					{!signingIn ? "Signup" : "Signing Up..."}
				</button>
			</Form>
			<p>
				Already have an account?{" "}
				<Link className="underline underline-offset-2" to="/">
					Login
				</Link>
			</p>
		</Card>
	);
};

export default SignupForm;
