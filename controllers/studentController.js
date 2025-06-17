const Student = require('../models/Student');

exports.confirmFee = async (req, res) => {
  const { student_id, response } = req.query;
  try {
    const student = await Student.findById(student_id);
    if (!student) return res.status(404).send('Student not found');
    student.feeConfirmed = response === 'yes';
    await student.save();
    res.send(`Thank you. Your response (${response}) has been recorded.`);
  } catch (err) {
    res.status(500).send('Error updating confirmation');
  }
};