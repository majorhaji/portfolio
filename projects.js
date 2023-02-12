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

exports.addProject = (portfolio) => {
  return ref
    .child("portfolio")
    .child(portfolio.name)
    .set(portfolio, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`${portfolio.name} added to database`);
      }
    });
};

exports.deleteProject = (projectName) => {
  return ref
    .child("portfolio")
    .child(projectName)
    .remove((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`${projectName} removed from database`);
      }
    });
};

exports.updateProject = (portfolio) => {
  return ref
    .child("portfolio")
    .child(portfolio.name)
    .update(portfolio, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`${portfolio.name} updated with new data`);
      }
    });
};

exports.getProject = (projectName) => {
  return ref
    .child("portfolio")
    .child(projectName)
    .once("value", (snapshot) => {
      const project = snapshot.val();
      if (project) {
        return project;
      } else {
        console.log(`${projectName} not found`);
      }
    });
};
