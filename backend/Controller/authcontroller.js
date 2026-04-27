const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  res.status(201).json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1d' });

  res.json({ token, user });
};

