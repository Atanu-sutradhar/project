const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() => {
  console.log("connected to db")
}).catch((e) => {
  console.log(e)
})

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/TripNext")
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=>({...obj, owner: "685434c9109a9407116f28de"}))
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
}
initDB();