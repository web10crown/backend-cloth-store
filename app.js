// we can use this code to connect with data base and do functions with it
//<<==================================================================================>>

// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("./server/mongoose");
// const product = require("./server/productCollection");
// const multer = require("multer");

// app.use(express.json());
// app.use(cors());
// //multer code for image uploading

// const upload = multer({
// 	storage: multer.diskStorage({
// 		destination: function (req, file, cb) {
// 			cb(null, "../client/public/uploads/");
// 		},
// 		filename: function (req, file, cb) {
// 			const uniqueSuffix = Date.now() + ".jpg";
// 			const fName = file.fieldname + "-" + uniqueSuffix;
// 			cb(null, fName);
// 		},
// 	}),
// }).single("productImage");

// //Routers start from here
// app.get("/", async (req, res) => {
// 	const data = await product.find();
// 	res.send(JSON.stringify(data));
// });

// app.post("/newproduct", upload, async (req, res) => {
// 	const productImage = req.file.filename;
// 	let data = { ...req.body, productImage };
// 	data = new product(data);
// 	const result = await data.save();
// 	if (result._id) {
// 		res.send(JSON.stringify(result._id));
// 	}
// });

// //app listening code

// app.listen(5000, (err) => {
// 	if (!err) {
// 		console.log("PORT 5000");
// 	}
// });
