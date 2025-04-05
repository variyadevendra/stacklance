import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { validateEmail } from "./validation";

interface EmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const sesClient = new SESClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function sendContactEmail(data: EmailData) {
  const { name, email, phone, service, message } = data;

  if (!validateEmail(email)) {
    return { success: false, error: 'Invalid email address' };
  }

  // Company notification email
  const companyEmailParams = {
    Source: process.env.SES_FROM_EMAIL,
    Destination: {
      ToAddresses: [process.env.SES_TO_EMAIL!],
    },
    Message: {
      Subject: {
        Data: `New Contact Form Submission - ${service}`,
        Charset: "UTF-8",
      },
      Body: {
        Html: {
          Data: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb;">New Contact Form Submission</h2>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
              </div>
            </div>
          `,
          Charset: "UTF-8",
        },
      },
    },
  };

  // Auto-reply email
  const customerEmailParams = {
    Source: process.env.SES_FROM_EMAIL,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Subject: {
        Data: "Thank you for contacting Stacklance",
        Charset: "UTF-8",
      },
      Body: {
        Html: {
          Data: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <img src="https://your-domain.com/images/stacklance-logo-black.svg" alt="Stacklance" style="width: 180px; margin-bottom: 20px;">
              <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
              <p>Dear ${name},</p>
              <p>We have received your message and appreciate your interest in our ${service} services. Our team will review your request and get back to you within 24-48 hours.</p>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Your message:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
              </div>
              <p>Best regards,</p>
              <p>The Stacklance Team</p>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
                <p>Surat, Gujarat, India</p>
                <p>info@stacklance.io | +91 9574805131</p>
              </div>
            </div>
          `,
          Charset: "UTF-8",
        },
      },
    },
  };

  try {
    // Send both emails concurrently
    await Promise.all([
      sesClient.send(new SendEmailCommand(companyEmailParams)),
      sesClient.send(new SendEmailCommand(customerEmailParams)),
    ]);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: 'Failed to send email' };
  }
} 