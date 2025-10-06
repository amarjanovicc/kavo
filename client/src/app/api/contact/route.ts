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
    company,
    email,
    projectDetails = "",
    foundBy = "",
    helpWith = [],
    budget = "",
  } = body;

  if (!name || !company || !email) {
    return NextResponse.json({ message: "Obavezna polja nedostaju" }, { status: 400 });
  }

  console.log("Podaci forme:", { name, company, email, foundBy, helpWith, budget });

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
    subject: "🌐 Novi upit sa web strane",
    html: `
      <p><strong>Ime:</strong> ${name}</p>
      <p><strong>Tvrtka:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Kako su nas našli:</strong> ${foundBy}</p>
      <p><strong>Usluge:</strong> ${helpWith.join(", ")}</p>
      <p><strong>Budžet:</strong> ${budget}</p>
      <p><strong>Detalji:</strong><br>${projectDetails}</p>
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
