import { connection, connect } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import productModel from "../../../lib/models/product.model";
import axios from "axios";

const uri: string = process.env.MONGODB_URI || "";

export default async function test(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connect(uri);

    const apiData = await axios.get(
      "https://fakestoreapi.com/products"
    );

    // check if the collection already exists
    const existingData = await productModel.findOne({});

    // insert the data only if the collection doesn't exist
    if (!existingData) {
      const data = new productModel(apiData);
      console.log(apiData);
      await data.save();
      res
        .status(200)
        .json({ message: "Data inserted successfully." });
    } else {
      const data = new productModel(apiData);
      console.log(data);
      res.status(200).json({
        message: "Data already exists in the collection.",
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
}
