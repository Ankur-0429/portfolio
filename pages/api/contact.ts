export default function (req: any, res: any) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.user,
        pass: process.env.password,
      },
      secure: true,
    })
    const mailData = {
      from: process.env.user,
      to: process.env.user,
      subject: `${req.body.subject}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err:any, info:any) {
      if(err)
        res.status(404).end()
    })
    res.status(200).end()
  }