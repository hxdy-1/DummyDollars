const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");

require("dotenv").config();

const port = process.env.port;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(port, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", port);
});
