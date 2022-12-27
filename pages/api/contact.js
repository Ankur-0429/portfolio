import emailjs from "@emailjs/nodejs";

export default async (req, res) => {
  await emailjs.send(
    process.env.EMAILJS_SERVICEID,
    process.env.EMAILJS_TEMPLATEID,
    req.body,
    {
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
      privateKey: process.env.EMAILJS_PRIVATE_KEY,
    },
  ).then(() => {
    res.status(200).json({ status: "OK" });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ status: "Unexpected Error" });
  })
};
