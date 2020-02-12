//signup
const SignUpForm = document.querySelector('#SignUp-form');
SignUpForm.addEventListener('submit',(e) => {
    e.preventDefault();

    //get user info
    const email = SignUpForm['signUpemail'].value;
    const password = SignUpForm['signUppass'].value;

      firebase.auth().createUserWithEmailAndPassword(email, password).then(cred =>{
          console.log(cred.user);
          const page = document.querySelector('#SignUp-form');
          m.page.getInstance(page).close();
          SignUpForm.reset();
      })
  


})