import React, { useEffect, useRef } from "react";
import Card from "../utils/Card";
import {
	Form,
	useActionData,
	useNavigation,
	useSearchParams,
} from "react-router-dom";

const SendMoney = () => {
	const [searchParams] = useSearchParams();
	const amountInputRef = useRef();
	const actionData = useActionData();
	const navigation = useNavigation();
	const sendingMoney = navigation.state === "submitting";
	useEffect(() => {
		amountInputRef.current.focus();
	}, []);
	// console.log(searchParams.get("name"));
	// console.log(searchParams.get("id"));
	// console.log(actionData);
	return (
		<Card>
			<h1 className="font-bold text-3xl mb-4 px-4">Send Money 💵</h1>
			<div className="flex w-full items-center gap-4">
				<div className="flex items-center justify-center rounded-full bg-stone-50 w-12 h-12 text-black font-semibold text-2xl">
					{searchParams.get("name")?.[0].toUpperCase()}
				</div>
				<h2 className="text-2xl font-semibold md:text-3xl">
					{searchParams.get("name")}
				</h2>
			</div>
			<Form
				method="post"
				// action="/send"
				className="flex flex-col gap-2 w-full"
			>
				{actionData && (
					<p className="text-red-500 font-semibold">
						{actionData} :(
					</p>
				)}
				<label className="w-full" htmlFor="amount">
					&#8377; Enter amount (in Rs.)
				</label>
				<input
					ref={amountInputRef}
					className="px-2 py-2 rounded-md shadow-lg w-full"
					type="number"
					name="amount"
					id="amount"
					required
					step="1"
					min="1"
					placeholder="Positive Integer"
				/>
				<button className="bg-white font-bold w-full text-black rounded-md py-2 transition-all transform hover:bg-emerald-500 active:translate-y-0.5 shadow-none md:text-base">
					{!sendingMoney ? "Initiate Transfer 💳" : "Sending..."}
				</button>
			</Form>
		</Card>
	);
};

export default SendMoney;
