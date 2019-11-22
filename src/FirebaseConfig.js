import app from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-pT1aZG6Yf0ly_M_oUEVXeXozWC8dg6Y",
    authDomain: "out-of-the-box-18fba.firebaseapp.com",
    databaseURL: "https://out-of-the-box-18fba.firebaseio.com",
    projectId: "out-of-the-box-18fba",
    storageBucket: "out-of-the-box-18fba.appspot.com",
    messagingSenderId: "219209983863",
    appId: "1:219209983863:web:e3df6008c9d30e40186372",
    measurementId: "G-R9FE3QC2S4"
  };

  const fire = app.initializeApp(firebaseConfig)

export default fire
export const Firestore = fire.firestore()