import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Ensure Node.js runtime (required for nodemailer)
export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    const { email, subject, text } = body;

    // Validate required fields
    if (!email || !subject || !text) {
      return NextResponse.json(
        { error: 'Missing required fields: email, subject, and text are required' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error. Please check SMTP settings.' },
        { status: 500 }
      );
    }

    // Send email
    const info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: 'contact@f1ssure.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `From: ${email}\n\n${text}`,
      html: `
        <div>
          <p><strong>From:</strong> ${email.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          <p><strong>Subject:</strong> ${subject.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          <hr>
          <p>${text.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;

    // Log full error details for debugging
    console.error('Full error details:', {
      message: errorMessage,
      stack: errorStack,
      error: error
    });

    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}

