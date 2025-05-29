import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database/database";

// Define attributes
export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  techId: number;
  userName: string;
  password?: string;
  email: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: number;
  dateOfBirth?: Date;
  phone?: number;
  role?: string;
  status?: string;
  provider?: string;
  googleId?: string;
}

// Optional fields for creation
export type UserCreationAttributes = Optional<
  UserAttributes,
  | "id"
  | "password"
  | "address"
  | "city"
  | "state"
  | "country"
  | "zip"
  | "dateOfBirth"
  | "phone"
  | "role"
  | "status"
  | "provider"
  | "googleId"
>;

// Define model class
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public techId!: number;
  public userName!: string;
  public password?: string;
  public email!: string;
  public address?: string;
  public city?: string;
  public state?: string;
  public country?: string;
  public zip?: number;
  public dateOfBirth?: Date;
  public phone?: number;
  public role?: string;
  public status?: string;
  public provider?: string;
  public googleId?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    techId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true, // Nullable for OAuth users
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true },
    },
    address: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    zip: { type: DataTypes.INTEGER },
    dateOfBirth: { type: DataTypes.DATEONLY },
    phone: { type: DataTypes.INTEGER },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "local", // 'local' or 'google'
    },
    googleId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: true,
    indexes: [
      { fields: ["techId"] },
      { fields: ["userName"] },
      { fields: ["email"] },
    ],
  }
);

export default User;
