// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { 
  ref,
  set,
  push,
  getDatabase,
  onValue
 } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC7cfwRgfUYwvIHF2UuIEF_WFV5marstA",
  authDomain: "form-8bfe2.firebaseapp.com",
  databaseURL: "https://form-8bfe2-default-rtdb.firebaseio.com",
  projectId: "form-8bfe2",
  storageBucket: "form-8bfe2.appspot.com",
  messagingSenderId: "854518883211",
  appId: "1:854518883211:web:49e6e4e61ce00e3e7a858e",
  measurementId: "G-0TR9WYMD19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

window.submitForm = function(){
    var city = document.getElementById("city").value;
    var course = document.getElementById("course").value;
    var fullName = document.getElementById("fullName").value;
    var fatherName = document.getElementById("fatherName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var cnic = document.getElementById("cnic").value;
    var fatherCnic = document.getElementById("fatherCnic").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var qualification = document.getElementById("qualification").value;
    var laptop = document.getElementById("laptop").value;

    var newEntryRef ={
        city: city,
        course: course,
        fullName : fullName,
        fatherName : fatherName,
        email : email ,
        phone : phone,
        cnic : cnic,
        fatherCnic : fatherCnic,
        dateOfBirth : dateOfBirth,
        gender : gender,
        address : address,
        qualification : qualification,
        laptop : laptop
    };
    newEntryRef.id = push(ref(database,"Entries/")).key;
    var reference = ref(database, `Entries/${newEntryRef.id}`);
    set(reference,newEntryRef);
}
