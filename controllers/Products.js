import Products from "../models/ProductModel.js";
import path from "path";
import { title } from "process";

export const getProducts = async (req, res) => {
  try {
    const response = await Products.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductsById = async (req, res) => {
  try {
    const response = await Products.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveProducts = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ message: "No file Uploded" });
  const name = req.body.title;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", "jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ message: "Invalid Images" });

  if (fileSize > 5000000)
    return res.status(422).json({ message: "Image must be less than 5MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ message: err.message });
    try {
      await Products.create({
        title: title,
        image: fileName,
        image_url: url,
        location: location,
        surface_area: surface_area,
        building_area: building_area,
        bathroom: bathroom,
        bedroom: bedroom,
        certificate: certificate,
        description: description,
      });
      res.status(201).json({ message: "Product Created successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateProducts = (req, res) => {};

export const deleteProducts = (req, res) => {};
