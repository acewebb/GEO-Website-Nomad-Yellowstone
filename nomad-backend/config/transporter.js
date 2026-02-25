require("dotenv").config();
const nodemailer = require("nodemailer");

// Nodemailer transporter setup for Gmail
// Ensure EMAIL_PASS is an "App Password" generated in Google Account settings
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendConfirmationEmail = async (bookingData) => {
    const { name, email, tourId, date, seats } = bookingData;
    const timeStr = tourId === '9am' ? '9:00 AM' : tourId === '1pm' ? '1:00 PM' : '5:00 PM';

    const mailOptions = {
        from: `"Nomad Yellowstone" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Booking Confirmed: Nomad Yellowstone UTV Tour`,
        html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #1a1a1a;">
        <h1 style="color: #b83b3b;">YOUR EXPEDITION IS CONFIRMED</h1>
        <p>Hello ${name},</p>
        <p>Your seats are securely reserved. Our guides are ready to take you into the Yellowstone backcountry.</p>
        
        <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Mission Details</h3>
        <ul style="list-style: none; padding-left: 0;">
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Departure Time:</strong> ${timeStr}</li>
          <li><strong>Reserved Seats:</strong> ${seats}</li>
        </ul>

        <p><em>Please arrive 15 minutes before departure. All passengers must wear the provided Dust Gear.</em></p>
        
        <p>See you in the dirt,<br><strong>Nomad Yellowstone Base Camp</strong></p>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Confirmation email dispatched to ${email}`);
    } catch (error) {
        console.error("Error dispatching email:", error);
    }
};

module.exports = { sendConfirmationEmail };
