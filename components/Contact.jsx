import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  const [ifload, setIfLoad] = useState(false);
  const [ifSuccess, setIfSuccess] = useState(true);

  const [ifCopy, setIfCopy] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleCloseCopy = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIfCopy(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIfLoad(true);

    let data = {
      name,
      phone,
      email,
      subject,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
      setOpen(true);
      setIfLoad(false);
      setIfSuccess(res.status === 200);
    });
  };

  return (
    <div id="contact" className="w-full lg:h-screen pt-10">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Let&#39;s Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-[22rem] shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <h2 className="py-2">Ankur Ahir</h2>
                <p>DevOps Developer</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/ankur-ahir-93b041211/"
                    target="_blank"
                    rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Ankur-0429"
                    target="_blank"
                    rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/ankur_ahir88/"
                    target="_blank"
                    rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaInstagram />
                    </div>
                  </a>

                  <Link href="/resume">
                    <a>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <CopyToClipboard
                text="ahir.ankur0429@gmail.com"
                onCopy={() => {
                  setIfCopy(true);
                }}>
                <button className="w-full py-3 mt-5">Copy Email</button>
              </CopyToClipboard>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  {ifload ? (
                    <CircularProgress sx={{ color: "white" }} size={40} />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <Snackbar
        open={open}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        autoHideDuration={6000}
        onClose={handleClose}>
        {ifSuccess ? (
          <Alert
            open={open}
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}>
            Email Received!
          </Alert>
        ) : (
          <Alert
            open={open}
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}>
            An error has occurred. Please try again
          </Alert>
        )}
      </Snackbar>
      <Snackbar
        open={ifCopy}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        autoHideDuration={6000}
        onClose={handleCloseCopy}>
        <Alert
          open={ifCopy}
          onClose={handleCloseCopy}
          severity="info"
          sx={{ width: "100%" }}>
          Email has been Copied to Clipboard
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
