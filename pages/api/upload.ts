import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import Certi from "@/lib/certi";

interface CreateUserRequest {
  name: string;
  certificate: string;
  
}

interface ApiResponse {
  success: boolean;
  message: string;
  certi?: {
    id: string;
    name: string;
    certificate: string;
    createdAt: Date;
  };
}

export default async function upload(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Get request body
    const {name,certificate}: CreateUserRequest = req.body;

    // Required fields
    if (!name ||!certificate ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }




    // Create user
    const certi = await Certi.create({
      name,
      certificate,
  

    
    });

    // Success response
    return res.status(201).json({
      success: true,
      message: "Certificate Uploaded",
      certi: {
        id: certi._id.toString(),
        name: certi.name,
        certificate: certi.certificate,
        createdAt: certi.createdAt,
      },
    });
  } catch (error: unknown) {
    console.error("Create certificate error:", error);

    // Duplicate email/mobile
   

    // Mongoose validation error
    

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
