import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "ericleecodes@gmail.com",
      to: "ericleecodes@gmail.com",
      subject: "Hello from Portfolio",
      html: "<h1>Hello from Porfolio test</h1>",
    });
    return NextResponse.json({ data });
  } catch (error) {
    let errorMessage = "An unknown error occured";

    //Type guarding, making sure error is an actual Error
    if (error instanceof Error) errorMessage = error.message;

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
