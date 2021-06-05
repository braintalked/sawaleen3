

let emailIsValid = false;
let passwordIsValid = false;

document.getElementById("email").addEventListener('input', validateEmail);

function validateEmail()
  {
    document.getElementById("required2").innerText = "*Required";
    let enteredEmail = document.getElementById("email").value;
    let emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (enteredEmail.match(emailFormat))
    {
      console.log("valid email format");
      document.getElementById("required1").classList.add("d-none");
      document.getElementById("required11").classList.remove("d-none");
      emailIsValid = true;
    }
    else
    {
      console.log("invalid email format");
      document.getElementById("required1").classList.remove("d-none");
      document.getElementById("required11").classList.add("d-none");
      emailIsValid = false;
    }
  }
document.getElementById("password").addEventListener('input', validatePassword);

function validatePassword()
  {
    if (document.getElementById("password").value.length >= 6)
    {
      document.getElementById("required2").classList.add("d-none");
      document.getElementById("required22").classList.remove("d-none");
      passwordIsValid = true;
    }
  else
    {
      document.getElementById("required2").classList.remove("d-none");
      document.getElementById("required22").classList.add("d-none");
      passwordIsValid = false;
    }
  }

$("#signIn").click(function(){
  var email = $("#email").val();
  var password = $("#password").val();

  console.log("email is: "+email);

  if(email != "" && emailIsValid && password != "" && passwordIsValid)
  {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      localStorage.setItem("isNewUser", "false");
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorMessage == "The email address is already in use by another account.")
      {
        document.getElementById("required1").innerText = "The email address is already in use by another account";
        document.getElementById("required1").style.color  =  "red";
        document.getElementById("required1").style.fontSize  =  "14px";
        document.getElementById("required1").classList.remove("d-none");
        document.getElementById("required11").classList.add("d-none");
      }
    });
  }

  if(!emailIsValid)
  {
    document.getElementById("required1").style.color = "red";
    validateEmail();
  }

  if(!passwordIsValid)
  {
    document.getElementById("required2").style.color = "red";
    validatePassword();
  }

});
