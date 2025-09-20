import emailjs from "@emailjs/browser";

export function sendContactEmail(data: {
  title: string;
  name: string;
  time: string;
  message: string;
  email: string;
}) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      title: data.title,
      name: data.name,
      time: data.time,
      message: data.message,
      email: data.email,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
}
