import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json()); //Body Parsing

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is Running");
});

const PORT = process.env.PORT || 5000;
// console.log(process.env.PORT);

app.listen(PORT, () =>
  console.log(
    `Server running on ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold
  )
);
