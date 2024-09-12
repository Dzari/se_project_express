const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const {
  BAD_REQUEST,
  NOT_FOUND,
  DEFAULT,
  HTTPERROR,
  UNAUTHORIZED,
} = require("../utils/errors");
const { JWT_SECRET } = require("../utils/config");

const errorHandling = (err, res) => {
  if (err.code === 11000) {
    return res.status(HTTPERROR).send({ message: err.message });
  }
  if (err.name === "CastError") {
    return res.status(BAD_REQUEST).send({ message: err.message });
  }
  if (err.name === "DocumentNotFoundError") {
    return res.status(NOT_FOUND).send({ message: err.message });
  }
  return res
    .status(DEFAULT)
    .send({ message: "An error has occurred on the server" });
};

const updateUser = (req, res) => {
  const userId = req.user._id;
  const { name, avatar } = req.body;

  User.findByIdAndUpdate(
    userId,
    { name, avatar },
    {
      new: true,
      runValidators: true,
    }
  )
    .orFail()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => errorHandling(err, res));
};

const getCurrentUser = (req, res) => {
  User.findById({ _id: req.user._id })
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => errorHandling(err, res));
};

const createUser = (req, res) => {
  const { name, avatar, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({ name, avatar, email, password: hash }))
    .then((user) => {
      res.send({
        name: user.name,
        avatar: user.avatar,
        email: user.email,
      });
    })
    .catch((err) => errorHandling(err, res));
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(BAD_REQUEST)
      .send({ message: "Email and Password are required" });
    return;
  }

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "7d",
      });
      res.send({ token });
    })
    .catch((err) => {
      if (err.message === "Incorrect email or password") {
        return res.status(UNAUTHORIZED).send({ message: err.message });
      }
      return res
        .status(DEFAULT)
        .send({ message: "An error has occurred on the server" });
    });
};

module.exports = { updateUser, getCurrentUser, createUser, login };
