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

// export async function POST(request: Request) {
//   // Récupérer le corps de la requête POST
//   const req = await request.json();

//   // Ecrire les données dans le fichier JSON
//   fs.writeFileSync("./data.json", JSON.stringify(req));

//   // Retourner une réponse JSON
//   return NextResponse.json({
//     status: 200,
//     message: "Success",
//   });
// }
