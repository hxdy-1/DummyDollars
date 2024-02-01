import React from "react";

const Card = ({ children, customStyles }) => {
	return (
		<div
			className={`bg-black text-white px-8 py-6 rounded-lg border-white mx-auto my-32 w-fit shadow-lg shadow-stone-900 flex flex-col gap-8 items-center ${customStyles}`}
		>
			{children}
		</div>
	);
};

export default Card;
