// Importing module
import express from "express";
import cors from "cors";
import session from "express-session";
import routes from "./routes/index";
import authRoutes from "./routes/auth";
import "dotenv/config";

const app = express();

const PORT = 3000;

// use secure true in prod
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY!,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

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
