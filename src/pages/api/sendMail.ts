import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: 'leo.fezard33@gmail.com',
            to: 'leo.fezard33@gmail.com',
            subject: 'Demande de contact',
            text: `
Email : ${req.body.Email},
Nom : ${req.body.Nom},
Téléphone : ${req.body.Tel},
Prénom : ${req.body.Prénom}
Message : 

${req.body.Message}`,
        };

        const info = await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'E-mail envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
}
