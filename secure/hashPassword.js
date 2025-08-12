import bcryptjs from "bcryptjs";

const hashPassword = async (password) => {
  return await bcryptjs.hash(password, 12);
};

const comparePassword = async (password, hashedPassword) => {
  return await bcryptjs.compare(password, hashedPassword);
};

export { hashPassword, comparePassword };