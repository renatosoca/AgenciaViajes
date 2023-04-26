import { createTransport } from 'nodemailer';
import { readFileSync } from 'fs';
import { compile } from 'handlebars';

let transport = createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmailRegister = async (name: string, lastName: string, email: string, token: string): Promise<boolean> => {
  try {
    const file = __dirname + `/../templates/auth/email-register.handlebars`;
    const template = compile(readFileSync(file, 'utf-8'));

    const dataEmail = {
      adminName: 'Renato Soca',
      adminEmail: 'u18215194@gamil.com',
      companyName: 'Casa Vision',
      name,
      lastName,
      email,
      token,
    }

    const sendEmail = await transport.sendMail({
      from: `${dataEmail.adminName} 👻 <${dataEmail.adminEmail}>`,
      to: email,
      subject: 'Confirmar correo',
      html: template({ ...dataEmail }),
    })

    console.log(sendEmail.messageId)
    return true;
  } catch (error) {
    console.log(error)
    return false;
  }
}

//Email forgot