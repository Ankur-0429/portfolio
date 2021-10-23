const nodemailer = require("nodemailer");

export default async (req, res) => {

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.user,
        pass: process.env.password,
    },
    secure: true,
});

await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            resolve(success);
        }
    });
});

const mailData = {
    from: process.env.user,
    to: process.env.user,
    subject: req.body.subject,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
};

await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            reject(err);
        } else {
            resolve(info);
        }
    });
});

res.status(200).json({ status: "OK" });
};