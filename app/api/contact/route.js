let nodemailer;
try {
  nodemailer = require('nodemailer');
} catch {
  nodemailer = null;
}

export async function POST(request) {
  const { email, message } = await request.json();
  if (!email || !message) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (
    nodemailer &&
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.EMAIL_TO
  ) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Boolean(process.env.SMTP_SECURE),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.SMTP_USER,
        to: process.env.EMAIL_TO,
        subject: 'New contact form message',
        text: message,
        replyTo: email,
      });
    } catch (err) {
      console.error('Email sending failed', err);
    }
  } else {
    console.log('Contact', { email, message });
  }

  return new Response(JSON.stringify({ status: 'ok' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
