import { Html } from "@react-email/components";
import * as React from "react";

type ContactMeProps = {
  firstName: string;
  message: string;
  email: string;
};

export default function ContactMe({
  firstName,
  message,
  email,
}: ContactMeProps) {
  return (
    <Html>
      <p>{message}</p>
      <p>From, {firstName}</p>
      <p>Email: {email}</p>
    </Html>
  );
}
