import firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyAzqIT48KPglYgeapKoz02K8LsQLCDtzPY",
    authDomain: "patient-management-b4aa1.firebaseapp.com",
    databaseURL: "https://patient-management-b4aa1.firebaseio.com",
    projectId: "patient-management-b4aa1",
    storageBucket: "patient-management-b4aa1.appspot.com",
    messagingSenderId: "342172399012",
    appId: "1:342172399012:web:82b1d0912e6c50290dbd31",
    measurementId: "G-ZZ5SNC64WY"
  };

const fire = firebase.initializeApp(firebaseConfig);


  export default fire;