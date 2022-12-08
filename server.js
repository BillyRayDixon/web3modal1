const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "conradsewellholderupdates@gmail.com",
      pass: "nbsauxxbvadslolq",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });


  router.post("/contact", (req, res) => {
    const nftHolderName = req.body.nftHolderName;
    const nftHolderEmail = req.body.nftHolderEmail;
    const nftHolderWallet = req.body.nftHolderWallet
    const mail = {
      from: 'conradsewellholderupdates@gmail.com',
      to: "becryptomedia@gmail.com",
      subject: "Contact Form Message",
      html: `
      <p>Name: ${nftHolderName}</p>
      <p>Email: ${nftHolderEmail}</p>
      <p>wallet: ${nftHolderWallet}</p>
      `,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ emailStatus: "ERROR" });
      } else {
        res.json({ emailStatus: "Message Sent" });
      }
    });
  });