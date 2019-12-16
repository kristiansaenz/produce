require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
const app = express();
import farmers from "./routes/farmers";
import boothRoutes from "./routes/boothRoutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import contactRoutes from "./routes/contactRoutes";
import reviewRoutes from "./routes/reviewRoutes";
const PORT = process.env.PORT || 4000;


app.disable("x-powered-by");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/farmers", farmers);
app.use("/booths", boothRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/contact", contactRoutes);
app.use("/reviews", reviewRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  require("./utils/db");
});
