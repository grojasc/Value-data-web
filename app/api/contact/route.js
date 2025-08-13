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
        to: process.env.EMAIL_TO || 'gonzalo@valuedata.us',
        subject: `Nuevo mensaje de contacto desde ValueData`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Email del contacto:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Enviado desde el formulario de contacto de ValueData</small></p>
        `,
        text: `
          Nuevo mensaje de contacto
          
          Email: ${email}
          Mensaje: ${message}
          
          Enviado desde el formulario de contacto de ValueData
        `,
        replyTo: email,
      });
    } catch (err) {
      console.error('Email sending failed', err);
    }
  } else {
    console.log('📧 NUEVO MENSAJE DE CONTACTO (modo desarrollo)');
    console.log('📩 Para:', 'gonzalo@valuedata.us');
    console.log('📨 De:', email);
    console.log('💬 Mensaje:', message);
    console.log('⚙️ Para enviar emails reales, configurar variables SMTP en .env.local');
  }

  return new Response(JSON.stringify({ status: 'ok' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
