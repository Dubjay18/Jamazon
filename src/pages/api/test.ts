import { connection, connect } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import testModel from "../../lib/models/test.model";

const uri: string = process.env.MONGODB_URI || "";

export default async function test(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connect(uri);
    const testObject = new testModel({
      first_name: "Tom",
      last_name: "Jerry",
    });
    // The intellisense will detect the fullName Method
    const name = testObject.fullName();
    await testObject.save();

    res.status(201).json({
      name,
    });

    // Erase test data after use
    connection.db.dropCollection(
      testModel.collection.collectionName
    );
  } catch (err) {
    res.status(400).json(err);
  }
}
