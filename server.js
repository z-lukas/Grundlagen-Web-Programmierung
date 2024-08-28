const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
    }
});

app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'lukas.zumstein@redq.ch',
        subject: `Neue Nachricht von ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            return res.json({ success: false });
        }
        console.log('Email sent:', info.response);
        res.json({ success: true });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});