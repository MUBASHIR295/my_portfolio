const firebaseConfig = {
    apiKey: "AIzaSyBgLK4Dxge2z7lbw5mUQXoH8kfSBYCWODc",
    authDomain: "myportfolio-8bd12.firebaseapp.com",
    databaseURL: "https://myportfolio-8bd12-default-rtdb.firebaseio.com",
    projectId: "myportfolio-8bd12",
    storageBucket: "myportfolio-8bd12.appspot.com",
    messagingSenderId: "918705069986",
    appId: "1:918705069986:web:5ce0c7be7a665e09279cfb"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your firebase

var contactFormDB = firebase.database().ref('contactFrom')
document.getElementById("contactForm").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefult();

    var name = getElementval('name');
    var emailid = getElementval('')
}

const getElementval =(id) => {
    return document.getElementById(id).value;
}