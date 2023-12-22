import { EmailContactPage } from "@/components/EmailContactPage";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  const emailHtml = EmailContactPage({
    name,
    email,
    message,
  });
  try {
    const data = await resend.emails.send({
      from: "info@lavkoucezmoravu.eu",
      to: "lavkoucezmoravu@gmail.com",
      subject: "Lávkou cez Moravu | Dotaz od návštevníka",
      html: emailHtml,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}