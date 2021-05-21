// var admin = require("firebase-admin");

// // change to your credentials

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://gabrews-97fed-default-rtdb.firebaseio.com"
// });

// const db = admin.firestore();

// const {Firestore} = require('@google-cloud/firestore');

// const firestore = new Firestore();

import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD0C71-sWEhbgtJplYzDCP5xPm4EUaBPIs",
    authDomain: "gabrews-97fed.firebaseapp.com",
    databaseURL: "https://gabrews-97fed-default-rtdb.firebaseio.com",
    projectId: "gabrews-97fed",
    storageBucket: "gabrews-97fed.appspot.com",
    messagingSenderId: "488550394013",
    appId: "1:488550394013:web:defa66ddf3eac1755dcc74",
    measurementId: "G-64LXSB4099"
  };

firebase.initializeApp(firebaseConfig)

 const db = firebase.firestore();

export async function pullStyles(){
  let styleList =  await db.collection("styles").get();
  styleList.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
  
  console.log(styleList)
//   styleList.forEach((doc)=>{
//     console.log(doc)
//   })

//   console.log(styleList)
}
