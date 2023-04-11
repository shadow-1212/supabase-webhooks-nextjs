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

export async function POST(request: Request) {
  const { data } = await request.json();
  const jsonData = JSON.stringify(data);
  fs.writeFileSync("./public/data.json", jsonData);

  return NextResponse.json({
    status: 200,
    message: "Data has been updated",
  });
}