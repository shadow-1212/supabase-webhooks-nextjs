import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const req = await request.json();

  const filePath = path.join(process.cwd(), "data.json");

  // if (!fs.existsSync(filePath)) {
  //   return NextResponse.json({
  //     status: 404,
  //     message: "File does not exist.",
  //   });
  // }

  fs.writeFileSync(filePath, JSON.stringify(req));

  return NextResponse.json({
    status: 200,
    message: "Success",
  });
}
