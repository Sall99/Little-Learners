import { ContactForm, Overview } from "@/components";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <Overview
        buttonText="Contact Us"
        title={"Feel Free To Connect With Us"}
        description={
          "We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
        }
        contact
      />
      <ContactForm />
    </>
  );
}
