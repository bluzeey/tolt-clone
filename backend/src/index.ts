// Importing module
import express from "express";
import cors from "cors";
import routes from "./routes/index";
import authRoutes from "./routes/auth";

const app = express();

const PORT = 3000;

// Handling GET / Request
app.use(express.json());
app.use(cors());
app.use("/", routes);
app.use("/auth", authRoutes);

// Server setup
app.listen(PORT, () => {
  console.log(
    "The application is listening " + "on port http://localhost:" + PORT
  );
});
