const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/mail', function(req, res){
  return res.json('dd');
})

router.post('/mail', function(req, res){
  sendMail('fchopinof99@gmail.com', '[Portfolio] Contact from '+req.body.email, req.body.text);
  res.end();
})

function sendMail(to, subject, html){
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  let info = transporter.sendMail({
    from: '"Portfolio" <'+process.env.MAIL_USER+'',
    to: to,
    subject: subject,
    html: html
  });
};

module.exports = router;
