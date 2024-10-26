const express = require('express');
const cors = require('cors');
const sendMail = require('./utils/utilsMail');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3005;

// CORS setup
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/send/mail", async (req, res, next) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all details"
        });
    }

    try {
        // Using sendMail utility function
        await sendMail({
            email,
            subject: "New Contact Form Submission",
            message,
            userEmail: email
        });

        return res.status(200).json({
            success: true,
            message: "Message sent successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
