const admin = require("firebase-admin");

const firebaseConfig = {
  apiKey: "AIzaSyBVc8iO9O9H96owpNPBKi_2nvz2EP7P5UY",
  authDomain: "portfolio-24bee.firebaseapp.com",
  databaseURL:
    "https://portfolio-24bee-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "portfolio-24bee",
  storageBucket: "portfolio-24bee.appspot.com",
  messagingSenderId: "62419036942",
  appId: "1:62419036942:web:8ed9c8b34ea2c76c8c455f",
  measurementId: "G-5H714ED8PN",
};

// Initialize Firebase Admin SDK with a private key file
admin.initializeApp({
  credential: admin.credential.cert(
    "./portfolio-24bee-firebase-adminsdk-nctkd-320b27436b.json"
  ),
  databaseURL: firebaseConfig.databaseURL,
});

const db = admin.database();
const ref = db.ref();

const updatePortfolio = {
  name: "Stock Portfolio Web App",
  url: "https://pynance.netlify.app/",
  stack: "Python, Flask, React, Firebase",
};

ref
  .child("portfolio")
  .child(updatePortfolio.name)
  .set(updatePortfolio, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("data saved");
    }
  });
module.exports = admin;
