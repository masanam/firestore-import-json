const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
require('dotenv').config();
const data_json = require('./data.json');

const firebaseConfig = {
  apiKey: "AIzaSyC59C91cZD6KVlFr9QoeKh4ZbiuqWQcaSc",
  authDomain: "mgj-website.firebaseapp.com",
  databaseURL: "https://mgj-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mgj-website",
  storageBucket: "mgj-website.firebasestorage.app",
  messagingSenderId: "1068796830764",
  appId: "1:1068796830764:web:9110e88f67350f30b19d89",
  measurementId: "G-PFZY2L7RP4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let i = 0;
const importJSON = async () => {
  for await (const data of data_json) {
    i++;
    n=i.toString();
    db.collection('ourMissions').doc(n).set(data);
  }
};

// db.collection("cities").doc("LA").set({
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// })

importJSON();
