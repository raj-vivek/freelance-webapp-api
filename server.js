import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import categoryRoute from "./routes/category.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

const corsOptions = {
  origin: process.env.CORS_ORIGIN_URL,
  credentials: true, // Allow cookies and other credentials to be sent
};

app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN_URL,
//     credentials: true,
//     exposedHeaders: ["Set-Cookie"],
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
//   })
// ); //credentials: true - cause we are passing cookies
// // exposedHeaders: ["set-cookie"] required to expose the Set-Cookie header so it could work

app.use(express.json());
app.use(cookieParser());
app.set("trust proxy", 1);

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/categories", categoryRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(process.env.PORT || 8080, () => {
  connect();
  console.log("Backend server is running!");
});
