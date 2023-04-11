import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(request: Request) {
  const data = fs.readFileSync("./public/data.json");

  // Convertir le contenu JSON en un objet JavaScript
  const jsonData = JSON.parse(data.toString());

  console.log(jsonData);
  return NextResponse.json({
    status: 200,
    data: jsonData
  });
}
