const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const express = require("express");
const passport = require("passport");
const passportSetup = require("./config/passport-setup");
const session = require("express-session");
const authRoutes = require("./modules/auth-routes");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cors = require("cors");

const app = express();
const port = 3333;

mongoose.connect(keys.MONGODB_URI, () => {
    console.log("Connected to mongo db");
});

app.use(
    cookieSession({
      name: "session",
      keys: [keys.COOKIE_KEY],
      maxAge: 24 * 60 * 60 * 100
    })
);

app.use(cookieParser());

app.use(passport.initialize());

app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true 
  })
);

app.use("/auth", authRoutes);

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
          authenticated: false,
          message: "user has not been authenticated"
        });
    } else {
        next();
    }
};

app.get("/", authCheck, (req, res) => {
    res.status(200).json({
        authenticated: true,
        message: "user successfully authenticated",
        user: req.user,
        cookies: req.cookies
    });
});

app.listen(port, () => console.log(`Server is running on port ${port}!`));
