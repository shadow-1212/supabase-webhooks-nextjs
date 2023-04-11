// import { NextResponse } from "next/server";
// import fs from "fs";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
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
