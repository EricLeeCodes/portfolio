import ContactMe from "@/app/emails/ContactMe";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, firstName } = await request.json();
  try {
    const { data } = await resend.emails.send({
      from: { email },
      to: email,
      subject: "EricLeeCodes Contact",
      react: ContactMe({ firstName }),
    });
    return NextResponse.json({ data });
  } catch (error) {
    let errorMessage = "An unknown error occured";

    //Type guarding, making sure error is an actual Error
    if (error instanceof Error) errorMessage = error.message;

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
