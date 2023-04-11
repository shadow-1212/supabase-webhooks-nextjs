import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(request: Request) {
  const toConvert = fs.readFileSync("./public/data.json");

  const data = JSON.parse(toConvert.toString());

  return NextResponse.json({
    status: 200,
    data,
  });
}
