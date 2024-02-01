const mongoose = require("mongoose");
const { number } = require("zod");
require("dotenv").config();

const mongo_url = process.env.mongo_url;

mongoose.connect(mongo_url);

const UserSchema = mongoose.Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
});

const AccountSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	balance: Number,
});

const User = mongoose.model("Users", UserSchema);
const Account = mongoose.model("Accounts", AccountSchema);

module.exports = {
	User,
	Account,
};
