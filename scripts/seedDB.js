const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/kinderdb",
  {
    useMongoClient: true
  }
);

const providerSeed = [
  {
    id: "Fred", 
    name: "Fred Rogers",
    image: "/images/dadwithtwokids.jpg",
    occupation: "Science Teacher/Football Coach",
    location: "Lakewood, Denver",
    kids: "2",
    interests: "Camping, Cooking, Sweaters, Singing",
    email: "Fred@gmail.com"
  },
  {
    id: "Lorelei", 
    name: "Lorelei Gilmore",
    image: "/images/momanddaughter.jpg",
    occupation: "Fashion Designer",
    location: "Cherry Creek, Denver",
    kids: "1",
    interests: "Travel, Reading, Arts",
    email: "Lori@Carl.com"
  },
  {
    id: "Matt and Kim", 
    name: "Matt and Kim Jansport",
    image: "/images/familyoffour.jpg",
    occupation: "Trustafarians",
    location: "Highlands, Denver",
    kids: "2",
    interests: "Family adventures, Travel, Camping",
    email:"MnK@Possible.com"
 
  }
];

db.Provider
  .remove({})
  .then(() => db.Provider.collection.insertMany(providerSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
