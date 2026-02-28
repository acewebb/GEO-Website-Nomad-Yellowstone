import nodemailer from 'nodemailer';

// Nodemailer transporter setup for Gmail
// Ensure EMAIL_PASS is an "App Password" generated in Google Account settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendConfirmationEmail = async (bookingData: any) => {
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

export const sendAdminNotificationEmail = async (bookingData: any) => {
  const { name, email, phone, tourId, date, seats } = bookingData;
  const timeStr = tourId === '9am' ? '9:00 AM' : tourId === '1pm' ? '1:00 PM' : '5:00 PM';

  const mailOptions = {
    from: `"Nomad Yellowstone Bookings" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Send to the admin's email address
    subject: `NEW BOOKING: ${seats} Seats on ${date} @ ${timeStr}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #1a1a1a;">
        <h1 style="color: #b83b3b;">NEW SECURE BOOKING</h1>
        <p>A new tour has been successfully paid for and secured.</p>
        
        <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Primary Passenger Details</h3>
        <ul style="list-style: none; padding-left: 0;">
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>

        <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Mission Details</h3>
        <ul style="list-style: none; padding-left: 0;">
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Departure Time:</strong> ${timeStr}</li>
          <li><strong>Reserved Seats:</strong> ${seats}</li>
        </ul>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Admin notification email dispatched.`);
  } catch (error) {
    console.error("Error dispatching admin notification email:", error);
  }
};

