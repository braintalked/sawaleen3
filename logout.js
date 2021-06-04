document.getElementById("logoutButton").addEventListener('click', logOutOfPage);

function logOutOfPage()
{
  console.log("logout buttonclicked");
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    localStorage.clear();
    console.log("Signe-out successful");
    // window.location.href = "index.html";
    window.location.replace("index.html");

  }).catch((error) => {
    // An error happened.
    alert("Error during  logging  out!");
  });
}
