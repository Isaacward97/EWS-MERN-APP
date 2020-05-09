const mongoose = require('mongoose');

//creates connectdb function
// mongoose a promise is returned using async
//try catch block to get errors
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

//logs in console to show our database has been connected in a bright cyan colour
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (e) {
    console.log(`Error: ${e.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;
