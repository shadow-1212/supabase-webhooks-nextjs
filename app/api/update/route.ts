import { NextResponse } from "next/server";
import fs from "fs";

export async function POST(request: Request) {
  const req = await request.json();

  fs.writeFileSync("./data.json", JSON.stringify(req));

  return NextResponse.json({
    status: 200,
    message: "Success",
  });
}
