import { render } from "@react-email/render";
import ContactFormEmail from "@/email/contact-form-email";

export async function renderContactFormEmail(message: string, senderEmail: string) {
  // Call component as a function — NO JSX!
  const component = ContactFormEmail({ message, senderEmail });
  return await render(component);
}
