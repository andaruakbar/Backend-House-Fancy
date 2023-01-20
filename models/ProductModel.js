import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Products = db.define(
  "product",
  {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    image_url: DataTypes.STRING,
    location: DataTypes.STRING,
    suface_area: DataTypes.STRING,
    building_area: DataTypes.STRING,
    bathroom: DataTypes.STRING,
    bedroom: DataTypes.STRING,
    certificate: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Products;
