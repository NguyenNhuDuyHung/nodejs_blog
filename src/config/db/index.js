const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://dream:duyhun0311@cluster0.ol2rylp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        dbName: "f8_education_dev",
      }
    );
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
    console.log(error);
  }
}

module.exports = {
  connect,
};
