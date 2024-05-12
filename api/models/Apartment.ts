// models/apartment.ts

import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";

interface ApartmentAttributes {
  id: number;
  name: string;
  description: string;
  location: string;
  price?: number; // Optional attribute
}

interface ApartmentCreationAttributes
  extends Optional<ApartmentAttributes, "id"> {}

class Apartment
  extends Model<ApartmentAttributes, ApartmentCreationAttributes>
  implements ApartmentAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public location!: string;
  public price?: number; // Optional attribute

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Apartment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "apartments",
    modelName: "Apartment", // We need to choose the model name
  }
);

export default Apartment;
