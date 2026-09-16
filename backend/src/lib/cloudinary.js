import { v2 as cloudinary} from "cloudinary";
import {config} from "dotenv";

config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET ? "Loaded" : "Missing",
});

try {
  const result = await cloudinary.api.ping();
  console.log(result);
} catch (err) {
  console.log(err);
}

export default cloudinary;