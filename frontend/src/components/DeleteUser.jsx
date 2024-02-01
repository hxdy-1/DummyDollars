import axios from "axios";
import React from "react";
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";

const DeleteUser = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const navigation = useNavigation();

	const isDeleting = navigation.state === "submitting";

	const deleteHandler = async () => {
		const firstConfirm = confirm("Do you want to delete your account?");
		if (firstConfirm) {
			const secondConfirm = confirm(
				"This action cant be reversed!, and your account will be deleted permanently."
			);
			if (secondConfirm) {
				const username = searchParams.get("username");
				const token = localStorage.getItem("token");
				// console.log("Delete handler: " + username);
				// console.log("Token from deleteHandler: ", token);

				try {
					const { data } = await axios.delete(
						"http://localhost:3000/api/v1/user/delete",
						{
							data: { username },
							headers: {
								Authorization: "Bearer " + token,
								"Content-Type": "application/json",
							},
						}
					);

					console.log(data);
					localStorage.clear();
					navigate("/signup");
				} catch (error) {
					console.log(error.response.data);
					alert("invalid username");
				}
			} else {
				return;
			}
		} else {
			return;
		}
	};
	return (
		<button
			onClick={deleteHandler}
			className="bg-white font-bold w-full text-black rounded-md py-2 px-4 transition-all transform hover:bg-red-800 hover:text-white active:translate-y-0.5 shadow-none"
		>
			{!isDeleting ? "Delete account 💀" : "Deleting your account..."}
		</button>
	);
};

export default DeleteUser;
