import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendInvitationEmail(
  email: string,
  teamName: string,
  role: string,
  inviteId: number
) {
  const inviteUrl = `${process.env.NEXT_PUBLIC_APP_URL}/sign-up?inviteId=${inviteId}`;

  const mailOptions = {
    from: process.env.SMTP_FROM || 'noreply@example.com',
    to: email,
    subject: `Приглашение в команду ${teamName}`,
    html: `
      <h1>Вас пригласили в команду ${teamName}</h1>
      <p>Вы были приглашены с ролью: ${role}</p>
      <p>Чтобы принять приглашение, перейдите по ссылке:</p>
      <a href="${inviteUrl}">${inviteUrl}</a>
      <p>Ссылка действительна в течение 7 дней.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending invitation email:', error);
    return false;
  }
} 