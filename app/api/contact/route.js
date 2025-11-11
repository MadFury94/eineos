import { NextResponse } from "next/server";

// Map registry options to email addresses
const registryEmails = {
  "Trademark Registry": "trademark@iponigeria.com",
  "Patent and Design Registry": "patent.design@iponigeria.com",
};

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract form data
    const registry = formData.get("registry");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Get the recipient email based on registry selection
    const recipientEmail =
      registryEmails[registry] || registryEmails["Trademark Registry"];

    // Get file attachments if any
    const files = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("attachment") && value instanceof File) {
        files.push(value);
      }
    }

    // TODO: Implement email sending logic here
    // You can use services like:
    // - Resend (https://resend.com)
    // - SendGrid (https://sendgrid.com)
    // - Nodemailer with SMTP
    // - AWS SES
    // - Or any other email service

    // Example email content structure:
    const emailContent = {
      to: recipientEmail,
      from: process.env.FROM_EMAIL || "noreply@iponigeria.com",
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Registry:</strong> ${registry}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        ${
          files.length > 0
            ? `<p><strong>Attachments:</strong> ${files
                .map((f) => f.name)
                .join(", ")}</p>`
            : ""
        }
      `,
      text: `
        New Contact Form Submission
        Registry: ${registry}
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
        ${
          files.length > 0
            ? `Attachments: ${files.map((f) => f.name).join(", ")}`
            : ""
        }
      `,
    };

    // Log the email content (for development)
    console.log("Email would be sent to:", recipientEmail);
    console.log("Email content:", emailContent);

    // For now, return success response
    // Replace this with actual email sending logic
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // const data = await resend.emails.send(emailContent);

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully. We will get back to you soon!",
        recipientEmail: recipientEmail,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form. Please try again later.",
      },
      { status: 500 }
    );
  }
}
