import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    console.error("Ne mogu parse-ati body:", err);
    return NextResponse.json({ message: "Neispravan format podataka" }, { status: 400 });
  }

  const {
    name,
    email,
    projectDetails = "",
    foundBy = "",
    helpWith = [],
  } = body;

  if (!name || !email) {
    return NextResponse.json({ message: "Obavezna polja nedostaju" }, { status: 400 });
  }

  console.log("Podaci forme:", { name, email, foundBy, helpWith });

  // Stvaranje transporter-a
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });
  } catch (err) {
    console.error("Greška pri kreiranju transporter-a:", err);
    return NextResponse.json({ message: "Greška konfiguracije maila" }, { status: 500 });
  }

  const mailOptions = {
    from: `"Kontakt forma" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "🌐 Nova poruka s web stranice",
    html: `
      <p><strong>Ime:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Kako su nas našli:</strong> ${foundBy}</p>
      <p><strong>Interes:</strong> ${helpWith.join(", ")}</p>
      <p><strong>Poruka:</strong><br>${projectDetails}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Mail poslan:", info);
    return NextResponse.json({ message: "Mail poslan" }, { status: 200 });
  } catch (err) {
    console.error("Greška pri slanju maila:", err);
    return NextResponse.json({ message: "Greška prilikom slanja maila" }, { status: 500 });
  }
}
