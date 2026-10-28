// src/app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Federal Parts Website <onboarding@resend.dev>",
      // ⚠️ PALITAN ITO NG EMAIL MO MISMO (Yung nasa Resend account mo)
      to: "johncarlodelrosario36@gmail.com", // <--- PALITAN MO ITO
      subject: `New Message: ${subject}`,
      html: `
        <h2>New Message from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Dito natin makikita ang totoong error sa terminal
    console.error("RESEND ERROR:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
