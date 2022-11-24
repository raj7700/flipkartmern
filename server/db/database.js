import mongoose from "mongoose";

export const Connection = async (url) => {
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("Error while connection database", error.message);
  }
};

export default Connection;
