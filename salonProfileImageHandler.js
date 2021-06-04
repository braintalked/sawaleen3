
let salonProfileImage = {};
document.getElementById("selectProfileImage").addEventListener('change',function(e){
    console.log(e);
    salonProfileImage = e.target.files[0];
    console.log("image name "+salonProfileImage);
})
document.getElementById("uploadProfileImage").addEventListener('click', function(){

    firebase.storage().ref('users/' + firebase.auth().currentUser.uid + '/profile.jpg').put(salonProfileImage).
    then(function(){
        
        console.log("image uploaded successfully")
    
    }).catch(error => {
    console.log(error.message);
    });

});

// below code to immediately show salon profile image on the profile upon selection...
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#salonProfileImage')
                .attr('src', e.target.result)
                .width(150)
                .height(150);
        };

        reader.readAsDataURL(input.files[0]);
    }
}