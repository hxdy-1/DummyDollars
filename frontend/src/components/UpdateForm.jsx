import React, { useCallback, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";

const inputClasses =
	"w-full py-1.5 px-2 rounded outline-none focus:outline-stone-500 -outline-offset-2";

const buttonClasses =
	"bg-white font-bold w-full text-black rounded-md py-2 px-4 transition-all transform hover:bg-emerald-500 active:translate-y-0.5 shadow-none";

const UpdateForm = () => {
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		password: "",
	});

	const actionData = useActionData();
	// console.log("actionData: ", actionData);
	const navigation = useNavigation();
	const isUpdating = navigation.state === "submitting";

	const handleChange = useCallback((e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}, []);

	return (
		<>
			{!showForm && (
				<button
					onClick={() => setShowForm(true)}
					className={`${buttonClasses} px-4`}
				>
					Update user details
				</button>
			)}
			{showForm && (
				<Form
					method="post"
					action="/profile"
					className="font-semibold w-full font-sans text-left flex flex-col gap-4"
				>
					{!actionData ? (
						<p className="font-sans font-semibold text-stone-400">
							Update your account details
						</p>
					) : (
						<p className="font-sans font-semibold text-red-500">
							Could not update details :(
						</p>
					)}
					<label htmlFor="firstName" className="w-full">
						New first Name
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
						New last Name
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
					<label htmlFor="password" className="w-full">
						New password
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
						{!isUpdating ? "Update" : "Updating..."}
					</button>
				</Form>
			)}
		</>
	);
};

export default UpdateForm;
