const nodeMailer = require('nodemailer');

const sendMail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        },
        tls: {
            rejectUnauthorized: false // Bypass self-signed certificate issue
        }
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: `${options.message} \n\n Email of User Who Sent The Message: ${options.userEmail}`
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
