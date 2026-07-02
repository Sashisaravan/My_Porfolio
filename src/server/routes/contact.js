const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
    try {

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",

            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({

            from: email,

            to: process.env.EMAIL_USER,

            subject: `Portfolio Contact - ${name}`,

            html: `
                <h2>New Contact Message</h2>

                <p><b>Name:</b> ${name}</p>

                <p><b>Email:</b> ${email}</p>

                <p><b>Message:</b></p>

                <p>${message}</p>
            `
        });

        res.json({
            success: true,
            message: "Message sent successfully."
        });

    }
    catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "Unable to send message."
        });

    }
});

module.exports = router;