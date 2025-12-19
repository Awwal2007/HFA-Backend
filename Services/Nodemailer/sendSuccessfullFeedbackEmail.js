const dotenv = require("dotenv")
const transporter = require('./transporter');

const sendSuccessfullFeedbackEmail = (email, userFirstName)=>{
    const options = {
        to: email,
        subject: "Feedback sent successfully",
        from: "HFA",
        replyTo: "",
        html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.6; padding: 20px;">
        <p style="margin-bottom: 16px;">Hi ${userFirstName},</p>
      
        <p style="margin-bottom: 16px;">
          Your Feedback have been sent successfully
        </p>
      
        <p style="margin-bottom: 16px;">
          This helps us keep your account secure and ensures you don’t miss any important updates.
        </p>
      
        <p style="font-weight: bold;">HFA Team</p>
      </div>
        `
    }
    transporter.sendMail(options, (err, info)=>{
        if(err){
            console.log(err.message)
        }else{
            console.log("Email sent successfully")
            // console.log(info)
        }
    })
}

module.exports = sendSuccessfullFeedbackEmail