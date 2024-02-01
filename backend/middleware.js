// const express = require("express")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const middleware = async (req, res, next) => {
	const authHeader = req.headers.authorization;

	// console.log("middleware token: ", authHeader);

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res
			.status(403)
			.json({ message: "Invalid token, Bearer missing" });
	}

	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.verify(token, JWT_SECRET);

		// console.log("decoded token: ", decoded);
		req.userId = decoded.userId;
		// console.log("req.userId", req.userId);

		next();
	} catch (err) {
		return res.status(403).json({ message: "Invalid token" });
	}
};

module.exports = middleware;
