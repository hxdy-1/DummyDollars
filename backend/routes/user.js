const express = require("express");
const z = require("zod");
const { User, Account } = require("../db/db");
const jwt = require("jsonwebtoken");
const middleware = require("../middleware");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const router = express.Router();

const userSignupBody = z.object({
	username: z.string(),
	password: z.string(),
	firstName: z.string(),
	lastName: z.string(),
});

router.post("/signup", async (req, res) => {
	const { username, password, lastName, firstName } = req.body;

	const { success } = userSignupBody.safeParse(req.body);

	if (!success) {
		return res.status(411).json({
			message: "Username already taken or Incorrect inputs",
		});
	}

	const userExists = await User.findOne({ username });

	if (userExists) {
		return res.status(411).json({
			message: "Username already taken or Incorrect inputs",
		});
	}

	const user = await User.create({
		username,
		password,
		firstName,
		lastName,
	});

	const userId = user._id;
	const balance = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

	await Account.create({
		userId,
		balance,
	});

	const token = jwt.sign({ userId }, JWT_SECRET);

	res.json({ message: "User created successfully", token });
});

// Sign-in route:
const userSigninBody = z.object({
	username: z.string(),
	password: z.string(),
});

router.post("/signin", async (req, res) => {
	const { username, password } = req.body;
	const { success } = userSigninBody.safeParse(req.body);

	if (!success) {
		return res.status(411).json({
			message: "Incorrect credentials, double check, try again",
		});
	}

	const user = await User.findOne({
		username,
		password,
	});

	if (user) {
		const token = jwt.sign(
			{
				userId: user._id,
			},
			JWT_SECRET
		);

		res.json({
			token,
		});
		return;
	}

	res.status(411).json({
		message: "Incorrect credentials, double check, try again",
	});
});

// Update credentials route:

const updateBody = z.object({
	password: z.string().optional(),
	firstName: z.string().optional(),
	lastName: z.string().optional(),
});

router.put("/", middleware, async (req, res) => {
	const { success } = updateBody.safeParse(req.body);
	if (!success) {
		res.status(411).json({
			message: "Error while updating information",
		});
	}

	await User.updateOne({ _id: req.userId }, req.body);

	res.json({
		message: "Updated successfully",
	});
});

router.get("/bulk", async (req, res) => {
	const filter = req.query.filter || "";

	const users = await User.find({
		$or: [
			{
				firstName: {
					$regex: filter,
					$options: "i",
				},
			},
			{
				lastName: {
					$regex: filter,
					$options: "i",
				},
			},
			{
				username: {
					$regex: filter,
					$options: "i",
				},
			},
		],
	});

	res.json(users);
});

const deleteBody = z.string();

router.delete("/delete", middleware, async (req, res) => {
	// const username = req.body.username;
	console.log("username: ", username);

	const { success } = deleteBody.safeParse(username);
	if (!success) {
		res.status(400).json({
			message: "Error while deleting account due to invalid username",
		});
	}

	const userExists = await User.findOne({ username });
	// console.log(userExists);

	if (!userExists) {
		res.status(404).json({
			message: `No account found with username: ${username}`,
		});
	}

	await User.deleteOne({ username });
	await Account.deleteOne({ userId: userExists._id });

	res.json({ message: "Account deleted successfully" });
});

module.exports = router;
