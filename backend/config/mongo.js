const mongoose = require('mongoose');

const connectMongo = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/vueapp');
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectMongo;


