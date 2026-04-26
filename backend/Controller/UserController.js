const User = require('../models/User');
const db = require('../config/mysql');

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = new User({ name, email });
    await newUser.save();

    db.query(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email],
      (err) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'User created in MongoDB and MySQL' });
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }

}


