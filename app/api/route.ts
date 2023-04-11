import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(request: Request) {
  // const data = fs.readFileSync("./public/data.json");

  // Convertir le contenu JSON en un objet JavaScript
  // const jsonData = JSON.parse(data.toString());

  return NextResponse.json({
    status: 200,
  });
}

// export async function POST(request: Request) {
//   // Récupérer le corps de la requête POST
//   const req = await request.json();

//   // Ecrire les données dans le fichier JSON
//   fs.writeFileSync("./public/data.json", JSON.stringify(req));

//   // Retourner une réponse JSON
//   return NextResponse.json({
//     status: 200,
//     message: "Success",
//   });
// }
