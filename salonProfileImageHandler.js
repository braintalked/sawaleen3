
let salonProfileImage = {};
document.getElementById("selectProfileImage").addEventListener('change',function(e){
    console.log(e);
    salonProfileImage = e.target.files[0];
    console.log("image name "+salonProfileImage);
})
document.getElementById("uploadProfileImage").addEventListener('click', function(){

    firebase.storage().ref('users/' + firebase.auth().currentUser.uid + '/profile.jpg').put(salonProfileImage).
    then(function(){
        
        console.log("image uploaded successfully");

        //update profile image profile src in the salon database...
        let newProfileImageSrc = ""
        firebase.storage().ref('users/' + firebase.auth().currentUser.uid + '/profile.jpg').getDownloadURL().then(imgUrl =>{
           newProfileImageSrc = imgUrl;
           updateProfileImage(newProfileImageSrc);
           });
    
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
function updateProfileImage(newProfileImageSrc)
           {
            console.log(newProfileImageSrc);

            let salonProfileImage = {"salonProfileImage":newProfileImageSrc};
            db.collection('saloons').doc('Saloon Profiles').set({
            [firebase.auth().currentUser.uid ]:salonProfileImage

           },{ merge: true }).then(() => {
               console.log("Saloon added to database successfully written!");
           })
           .catch((error) => {
             console.error("Error adding saloon to database: ", error);
           });

           }