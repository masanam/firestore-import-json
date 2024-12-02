const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
require('dotenv').config();
const data_json = require('./data.json');

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
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
