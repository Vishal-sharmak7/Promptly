import nodemailer from "nodemailer";


export const greetOnMail = async (req, res, next) => {
  const { name, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: '"PROMPTLY" <process.env.EMAIL_USER>',
    to: email, 
    subject: "Welcome on Promptly", 
    text: "", 
    html: `

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Your OTP Code</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
        }

        .Top-head{
          text-align: center;
          font-size: 2rem;
          color: #333333;
          text-decoration: none;
          font-style: none;
        }

        .header {
            text-align: center;
            color: #333333;
        }

        

        .content {
            font-size: 16px;
            color: #555555;
            line-height: 1.6;
        }

        .footer {
            font-size: 13px;
            color: #999999;
            text-align: center;
            margin-top: 30px;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <a href="https://promptly-two-peach.vercel.app/" class="Top-head"><h1 >PROMPTLY</h1></a>
        <h2 class="header">Welcome</h2>
        <p class="content">Hi ${name},</p>
        <p class="content">Thank you,<br>Promptly</p>

        <div class="footer">
            © 2025 Promptly. All rights reserved.
        </div>
    </div>
</body>

</html>

`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
  next();
};
