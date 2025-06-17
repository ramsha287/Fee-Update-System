const Student = require('../models/Student');
const sendMail = require('../utils/mailer');

exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

exports.updateFeeDetails = async (req, res) => {
  try {
    console.log('REQ.PARAMS:', req.params);
    console.log('REQ.BODY:', req.body);

    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send('Student not found');

    const { totalFee, dueAmount, dueDate } = req.body;

    student.totalFee = totalFee;
    student.dueAmount = dueAmount;
    student.dueDate = dueDate;
    student.feeConfirmed = false;
    await student.save();

    await sendMail(student);
    res.send('Fee details updated and email sent.');
  } catch (err) {
    console.error('❌ ERROR IN UPDATE:', err);
    res.status(500).send('Server error during update');
  }
};


// exports.updateFeeDetails = async (req, res) => {
//   try {
//     const student = await Student.findById(req.params.id);
//     if (!student) return res.status(404).send('Student not found');

//     const { totalFee, dueAmount, dueDate } = req.body;
//     student.totalFee = totalFee;
//     student.dueAmount = dueAmount;
//     student.dueDate = dueDate;
//     student.feeConfirmed = false;
//     await student.save();

//     await sendMail(student);
//     res.send('Fee details updated and email sent.');
//   } catch (err) {
//     console.error('Update error:', err);
//     res.status(500).send('Server error during update');
//   }
// };