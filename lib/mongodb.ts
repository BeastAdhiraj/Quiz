
import { MongoClient, type Db } from "mongodb";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

const uri = process.env.MOURL;

const options = {};

if (!uri) {
  throw new Error("Add Mongo URI to .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "production") {
  client = new MongoClient(uri, options);

  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

const connectToDatabase = async () => {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(uri, options);
  }

  return mongoose.connection;
};

export { connectToDatabase, clientPromise };