// {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//     rate: 3.9,
//     count: 120
//     }
//     },
// lib/models/test.model.ts
import { IProduct } from "@/types";
import { Model, Schema } from "mongoose";
import createModel from "../createModel";

interface ITest {
  first_name: string;
  last_name: string;
}

interface ITestMethods {
  fullName(): string;
}

type ProductModel = Model<IProduct, {}>;

const productSchema = new Schema<IProduct, ProductModel>({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

// testSchema.method("fullName", function fullName() {
//   return this.first_name + " " + this.last_name;
// });

export default createModel<IProduct, ProductModel>(
  "products",
  productSchema
);
