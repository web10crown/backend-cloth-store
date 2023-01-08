const fs = require("fs");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();

app.use(express.json());
app.use(cors("https://crown-cloth-store.onrender.com/"));

app.use(express.static("public"));
app.use("/images", express.static("images"));

// multer code for saving image file

const upload = multer({
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, "./images");
		},
		filename: function (req, file, cb) {
			const uniqueSuffix = Date.now() + ".jpg";
			const fName = file.fieldname + "-" + uniqueSuffix;
			cb(null, fName);
		},
	}),
}).single("productImage");

// code for routes =================>

app.get("/", (req, res) => {
	let data = fs.readFileSync("./database/productCollection.txt", "utf8");
	console.log(data);
	res.send(data);
});
app.post("/newproduct", upload, async (req, res) => {
	let data = fs.readFileSync("./database/productCollection.txt", "utf8");
	data = JSON.parse(data);
	const productImage = req.file.filename;
	const bdata = { ...req.body, productImage };
	const newData = [...data, bdata];
	fs.writeFileSync(
		"./database/productCollection.txt",
		JSON.stringify(newData)
	);
	res.send(JSON.stringify(req.body._id));
});
app.listen(5000);
