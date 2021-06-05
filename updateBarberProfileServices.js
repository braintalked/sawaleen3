
//////////////////////// START DATA FETCHING ///////////////////////////


let barberName = "";
let barberProfileImageSrc = "";
let barberID2 = "";
let barberProvince = "";
let barberCity = "";
let barberImageSrc = "";
let barberServices = "";
let serviceDescription = "";
let servicePrice = "";

let isEmpty = false; // to be checked later...

const loader = document.querySelector(".loadingAnimation");
loader.classList.remove("hidden");

var barbers = db.collection("saloons").doc("Saloon Profiles");

barbers.get().then((doc) => {
    if (doc.exists) {
      var data = doc.data()
      for (var key in data)
      {
        if([key] == localStorage.getItem("barberID"))
        {
          barberName = data[key]["saloonName"];
          barberProfileImageSrc = data[key]["salonProfileImage"];
          barberID2 = data[key]["saloonID"];
          barberProvince = data[key]["saloonProvince"];
          barberCity = data[key]["saloonCity"];

          //new account with no services added...
          if(data[key]["services"] != null)
          {
            barberServices = data[key]["services"];
          }
          else
          {
            barberServices = {};
          }

          if(Object.keys(barberServices).length > 0)
          {
            for (i=1; i<=Object.keys(barberServices).length; i++)
              {
                serviceDescription = barberServices["service"+i]["service"+i+"Description"];
                servicePrice = barberServices["service"+i]["service"+i+"Price"];
              }
          }
          // console.log([key]);
          updateProfile();
        }
       
      }
      readyForClientOrder();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
//////////////////////// EDN OF DATA FETCHING ///////////////////////////

function updateProfile()
{  
  loader.classList.add("hidden");

  // let barberName = localStorage.getItem("barberName");
  // let barberImageSrc = localStorage.getItem("barberImageSrc");
  // let barberServices = localStorage.getItem("barberServices");
  // let isEmpty = localStorage.getItem("isEmpty");
    
  let serviceText = ""
  if(Object.keys(barberServices).length > 0)
  {
    for (i=1; i<=Object.keys(barberServices).length; i++)
    {
      serviceText = barberServices["service"+i]["service"+i+"Description"];
      servicePrice = barberServices["service"+i]["service"+i+"Price"];
      addNewService(serviceText,servicePrice,i)
    }
  }
  else
  {
    serviceText = null;
    servicePrice = null;
    addNewService(serviceText,servicePrice,1)
  }

  document.getElementById("barberName").src = barberName;
  document.getElementById("barberName").innerText = barberName;
  if (barberProfileImageSrc == "images/barberAvatar.png" && firebase.auth().currentUser != null)
  {
    document.getElementById("barberImage").src = "../"+barberProfileImageSrc;
  }
  else{
    document.getElementById("barberImage").src = barberProfileImageSrc;
  }
  document.getElementById("provinceText").style.marginLeft = "5px";
  document.getElementById("cityText").style.marginRight = "5px";
  document.getElementById("cityText").innerText = barberCity;
  document.getElementById("provinceText").innerText = barberProvince;
  
  function addNewService(serviceText,servicePrice,i)

  {
    // let divRow = document.createElement("div");
    // let div1 = document.createElement("div");
    // let div2 = document.createElement("div");
    // let div3 = document.createElement("div");
    // let div4 = document.createElement("div");
  console.log(serviceText);
  //////////
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let label1 = document.createElement("label");
  let input1 = document.createElement("input");
  /////////////

 if (serviceText != null)
 {
    serviceDescriptionText = document.createTextNode(" "+serviceText);
    servicePriceText = document.createTextNode(" "+servicePrice);
 }
 else
 { 
    serviceDescriptionText = document.createTextNode("لايوجد خدمات حالياً");
    servicePriceText = document.createTextNode(" ");
    input1.style.display = "none";
    div3.style.display = "none";
    label1.style.textAlign= "center";
 }
  
//  <div id="servicesOneRowDescription" class="d-flex justify-content-end align-items-center col-xs-12 col-sm-12 col-md-12 col-lg-12 ml-auto">
//   <div class="nameWraper ml-auto col-xs-10 col-sm-10 col-md-10 col-lg-10">
//       <input type="checkbox" id="service1" name="service1" value=""></input>
//       <label style = "margin-right: 5px; font-size: 20px" for="service1"> ارة لمدة ٥٠ دقيقة شاملة للمساج غسيل كامل للوجه مع </label>
//   </div>
//   <div class="servicePriceBox col-xs-2 col-sm-2 col-md-2 col-lg-2">
//    <span class="startingFrom"> ابتداءً من</span><span class="servicePrice">٢٢ ريال</span>
//  </div>
// </div>
    
    serviceDescriptionText.id  = "serviceDescritioncheckbox"+i;

    // divRow.className = "row"
    // divRow.style.marginTop = "10px"
    div1.id = "servicesOneRowDescription"
    div1.className = "d-flex justify-content-end align-items-center col-xs-12 col-sm-12 col-md-12 col-lg-12 ml-auto"
    div2.className = "nameWraper ml-auto col-xs-10 col-sm-10 col-md-10 col-lg-10"
    input1.type = "checkbox"
    input1.className = "checkboxInput"
    input1.style.width = "50px !important;";
    input1.id = "checkbox"+i;
    input1.name = "service"+i;
    label1.className = "serviceCheckbox";
    label1.id = "labelcheckbox"+i
    label1.style.marginRight = "10px";
    label1.for = "service"+i;
    label1.style.fontSize = "20px";
    label1.appendChild(serviceDescriptionText);
    span1.className = "serviceNameBox";
    div3.className = "servicePriceBox col-xs-2 col-sm-2 col-md-2 col-lg-2";
    span1.className = "startingFrom";
    span1.innerText = "تبدأ من";
    span2.className = "servicePrice";
    span2.appendChild(servicePriceText);
    // div2.className = "col-xs-12 col-sm-10 col-md-10 col-lg-10"
    // div3.className = "col-sm-1 col-md-1 col-lg-1"
    // div4.className = "checkbox"
    // div4.style.textAlign = "right"
    // div4.fontSize = "20px"
    // input1.style.textAlign = "right"
    // input1.style.marginRight = "60px"
    // divRow.appendChild(div1);
    // divRow.appendChild(div2);
    // divRow.appendChild(div3);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div2.appendChild(input1);
    div2.appendChild(label1);
    div3.appendChild(span1);
    div3.appendChild(span2);
    // div4.appendChild(label1)
    // label1.appendChild(input1)

  
    function insertAfter(referenceNode, newNode)
    {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
  
    var appendingElement = document.getElementById("startAppendingFromHere")
    insertAfter(appendingElement,div1)
  
  }
}
