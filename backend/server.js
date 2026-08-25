const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   HOME / API TEST
========================= */

app.get("/", (req, res) => {
    res.json({
        message: "SR Enterprises API is running"
    });
});


/* =========================
   AUTHENTICATION
========================= */

app.use("/api/auth", authRoutes);


/* =========================
   DATABASE
========================= */

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(5000, () => {
            console.log(
                "Server running on http://localhost:5000"
            );
        });
    })
    .catch((error) => {
        console.error(
            "MongoDB connection failed:"
        );

        console.error(error.message);
    });