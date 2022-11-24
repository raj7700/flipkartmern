import { products } from "./constants/data.js";
import Product from "./models/product-schema.js";
const Defaultdata = async () => {
  try {
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Database imported successfully");
  } catch (error) {
    console.log("Error while inseting data", error.message);
  }
};

export default Defaultdata;
