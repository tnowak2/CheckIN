// JavaScript source code

var db = firebase.firestore();

function storeData() {

    var inputEmail = document.getElementById("signUpemail").value;
    var inputPass = document.getElementById("signUppass").value;
    var inputFN = document.getElementById("signUpFN").value;
    var inputLN = document.getElementById("signUpLN").value;
    var inputOrg = document.getElementById("signUpOrg").value;

    db.collection("Users").add({
        FirstName: inputFN,
        LastName: inputLN,
        Org: inputOrg,
        Email: inputEmail,
        Passcode: inputPass
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}