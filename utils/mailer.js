const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.mailid,
    pass: process.env.mailpassword 
  }
});

module.exports = async function sendMail(student) {
  const mailOptions = {
    from: 'youremail@gmail.com',
    to: student.email,
    subject: 'Fee Submission Confirmation',
    html: `
      <p>Dear ${student.name},</p>
      <p>Your updated fee due is Rs.${student.dueAmount}. Please confirm whether you have submitted the fees.</p>
      <p>Click below to confirm:</p>
      <a href="http://localhost:3000/api/students/confirm?student_id=${student._id}&response=yes">Yes</a>
      <br />
      <a href="http://localhost:3000/api/students/confirm?student_id=${student._id}&response=no">No</a>
    `
  };

  await transporter.sendMail(mailOptions);
};
