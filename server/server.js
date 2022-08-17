import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json()); //Body Parsing

app.get("/", (req, res) => {
  res.send("API is Running");
});

const PORT = process.env.PORT || 5000;
// console.log(process.env.PORT);

app.listen(PORT, () =>
  console.log(`Server running on ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
