require("dotenv").config();
const transporter = require("./transporter");

const sendSuccessfulFeedbackEmailToAdmin = (userFirstName) => {
  const options = {
    to: "admin@gmail.com",
    subject: "New Feedback Submitted Successfully",
    from: `"Halal Food Authority" <anike@halalfoodauthority.com>`,
    replyTo: "no-reply@halalfoodauthority.com",
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.6; padding: 20px;">
        <p style="margin-bottom: 16px;">Hi Admin,</p>

        <p style="margin-bottom: 16px;">
          <strong>${userFirstName}</strong> has successfully submitted feedback.
        </p>

        <p style="margin-bottom: 16px;">
          Please review the feedback at your convenience.
        </p>

        <p style="font-weight: bold;">HFA IT Team</p>
      </div>
    `,
  };

  transporter.sendMail(options, (err) => {
    if (err) {
      console.error("Email sending failed:", err.message);
    } else {
      console.log("Admin notification email sent successfully");
    }
  });
};

module.exports = sendSuccessfulFeedbackEmailToAdmin;
