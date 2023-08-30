import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const password = req.body.password;
    const hash = bcrypt.hashSync(password, 10);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return next(createError(404, "User is not present"));
    }

    const pwdIsCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!pwdIsCorrect) {
      return next(createError(400, "Wrong username or password!"));
    }

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );

    const { password, ...info } = user._doc;
    res
      .status(200)
      .cookie("accessToken", token, {
        httpOnly: true,
        sameSite: "none",
        secure: "true",
      })
      .send(info);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};
