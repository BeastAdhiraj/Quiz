
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import Certi from "@/lib/certi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    await connectToDatabase();

    const certificate = await Certi.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      certificate,
    });
  } catch (error) {
    console.error("Error fetching certificates:", error);

    return res.status(500).json({
      success: false,
      error: "Failed to fetch certificates",
    });
  }
}
