"use server";

import nodemailer from "nodemailer";
import { validateString, getErrorMessage } from "@/lib/utils";
import { renderContactFormEmail } from "@/lib/renderEmailTemplate";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = (formData.get("senderEmail") as string) || "";
  const message = (formData.get("message") as string) || "";

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ✅ Safely render your React email component
    const emailHtml = await renderContactFormEmail(message, senderEmail);

    // ✅ Send via Gmail SMTP
    const info = await transporter.sendMail({
      from: `"Praveen | Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New message from ${senderEmail}`,
      replyTo: senderEmail,
      text: `
           New message from your portfolio contact form
           
           From: ${senderEmail}
           
           Message:
           ${message}
           
           ---
           Sent automatically from your portfolio site.
          `.trim(),
      html: emailHtml,
      headers: {
        "X-Priority": "1",
        "X-Mailer": "PortfolioMailer",
        "List-Unsubscribe": `<mailto:${process.env.GMAIL_USER}>`,
      },
    });

    return { data: info };
  } catch (err: unknown) {
    return { error: getErrorMessage(err) };
  }
};
