const { response, request } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const getUsers = async (req = request, res = response) => {
  const { from = 0, to = 5 } = req.query;
  const query = { status: true };
  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query).skip(from).limit(to),
  ]);

  res.json({
    total,
    users,
  });
};

const getUserById = async (req = request, res = response) => {
  const { id } = req.params;

  const user = await User.findById(id);

  res.json({
    user,
  });
};

const register = async (req = request, res = response) => {
  // Gets the body of the request.
  const data = req.body;
  const { name, email, password, role } = data;
  const user = new User({ name, email, password, role });

  // Encrypts the password.
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(password, salt);
  // Stores the User in the DB.
  await user.save();

  res.json({
    user,
    message: "Usuario creado correctamente.",
  });
};

const editUserById = async (req = request, res = response) => {
  const { id } = req.params;

  // Get the data to update.
  const { password, email, ...rest } = req.body;

  //If password is updated, it needs to be re-encrypted.
  if (password) {
    const salt = bcrypt.genSaltSync(10);
    rest.password = bcrypt.hashSync(password, salt);
  }

  // Finds the user and updates it.
  const user = await User.findByIdAndUpdate(id, rest, { new: true });

  res.json({
    message: "Usuario actualizado correctamente.",
    user,
  });
};

const deleteUserById = async (req = request, res = response) => {
  const { id } = req.params;

  const authUser = req.user;

  // Changes the status to false.
  const user = await User.findById(id);

  if (!user.status) {
    return res.json({
      message: "El usuario ha sido inactivado correctamente.",
    });
  }

  const deletedUser = await User.findByIdAndUpdate(
    id,
    { status: false },
    { new: true }
  );

  res.json({
    message: "Usuario inactivo.",
    deletedUser,
    authUser,
  });
};

module.exports = {
  getUserById,
  getUsers,
  register,
  editUserById,
  deleteUserById,
};