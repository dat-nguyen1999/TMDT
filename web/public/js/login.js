function initApp() {
    var firebaseConfig = {
        apiKey: "AIzaSyAzwvpVyDA8giQYqpBGokA0w6RzCUNN4aY",
        authDomain: "tmdt-a3a98.firebaseapp.com",
        databaseURL: "https://tmdt-a3a98.firebaseio.com",
        projectId: "tmdt-a3a98",
        storageBucket: "tmdt-a3a98.appspot.com",
        appId: "1: 358801568582: web: 650c9d19ad48ef5d792b47",
    };

    firebase.initializeApp(firebaseConfig);
}
var userGlobal = null
function loginWithEmailPass() {
    if (!firebase.apps.length) {
        initApp();
    } else {
        firebase.app();
    }
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((user) => {
            console.log(user)
            userGlobal = user;
            window.location = "index.html";
            // Signed in 
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
            // ..
        });
}

function createAccount(){
    if (!firebase.apps.length) {
        initApp();
    } else {
        firebase.app();
    }
    username = document.getElementById("signupuser").value;
    password = document.getElementById("signuppass").value;
    firebase.auth().createUserWithEmailAndPassword(username, password)
    .then((user) => {
        userGlobal = user;
        window.location = "index.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error)
    // ..
  });
}

function directLoginPage() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            //   User is signed in.
            let user = firebase.auth().currentUser;
            let uid
            if (user != null) {
                uid = user.uid;
                window.location = "index.html";
            }

        }
    });
}

function changeUIbtnLoginSignup(){
    if (!firebase.apps.length) {
        initApp();
    } else {
        firebase.app();
    }
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            //   User is signed in.
            let user = firebase.auth().currentUser;
            let uid
            if (user != null) {
                uid = user.uid;
                var bntLoginSignUp = document.getElementById("btnLoginSignUp");
                bntLoginSignUp.innerHTML = '<li><button onClick="signOut()">Sign Out</button></li>'
            }

        }
    });
}
function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        setTimeout(function(){
            window.location = "login.html";
        }, 1000)
      }).catch(function(error) {
        // An error happened.
            console.log(error)
      });

}