const Role = require("../models/Role");
const Menu = require("../models/Menu");
const Order = require("../models/Order");
const User = require("../models/User");

// Validates the given role.
const isRoleValid = async (role) => {
  const existingRole = await Role.findOne({ role });

  if (!existingRole) {
    throw new Error(`El rol ${role} no existe en la base de datos.`);
  }
};

// Validates the given Email.
const isEmailUnique = async (email) => {
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new Error(`La dirección de correo electrónico ${email} ya se encuentra registrada.`);
  }
};

// Validates the user.
const isUserByIdUnique = async (id) => {
  const existingUser = await User.findById(id);

  if (!existingUser) {
    throw new Error(`El ID ${id} no se corresponde con ningún usuario registrado.`);
  }
};

// Validates the Order.
const isOrderByIdUnique = async (id) => {
  const existingOrder = await Order.findById(id);

  if (!existingOrder) {
    throw new Error(
      `El ID ${id} no se corresponde con ningún pedido.`
    );
  }
};

// Validates the Menu.
const isMenuByIdUnique = async (id) => {
  const existingMenu = await Menu.findById(id);

  if (!existingMenu) {
    throw new Error(`El ID ${id} no se corresponde con ningún menú registrado`);
  }
};

module.exports = {
  isRoleValid,
  isEmailUnique,
  isUserByIdUnique,
  isMenuByIdUnique,
  isOrderByIdUnique,
};