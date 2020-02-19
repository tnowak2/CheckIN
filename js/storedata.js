var db = firebase.firestore();

function storeData() {
    var inputTextemail = document.getElementById("signUpemail").value;
    var inputTextpass = document.getElementById("signUppass").value

    db.collection("users").doc.add({
        pass: inputTextpass,
        email: inputTextemail
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

};