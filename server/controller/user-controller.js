import User from "../models/user-schema.js";

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.Username });
    if (exist) {
      return response.status(401).json({ message: "username already exists" });
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).send({ message: user });
  } catch (error) {
    console.log("Hello");
    response.status(500).json({ message: error.message });
  }
};
