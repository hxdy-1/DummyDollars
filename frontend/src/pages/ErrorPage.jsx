import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="font-sans flex flex-col items-center justify-center gap-4">
			<h1 className="font-bold text-4xl">
				This page does not exists: 404
			</h1>
			<Link to=".." relative="route" className="font-semibold text-lg">
				↩️ Go back
			</Link>
		</div>
	);
};

export default ErrorPage;
