const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const port = process.env.PORT || 5000;

const public = path.join(__dirname, 'public');
app.use(express.static(public));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/subscribe', (req, res) => {
  res.sendFile(public + '/subscribe.html')
})

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.post('/send', async (req, res) => {
  const output = `
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;

  const msg = {
    to: process.env.TO_EMAIL, // Change to your recipient
    from: process.env.FROM_EMAIL, // Change to your verified sender
    subject: 'Message from portfolio website',
    text: `${req.body.message}`,
    html: output
  };

  try {
    await sgMail.send(msg);
    console.log('email sent.')
  } catch (e) {
    console.log(e);
  }

  setTimeout(() => {
    res.redirect('/');
  }, 2000);


})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})