//////////////////////// STAET DATA FETCHING ///////////////////////////
const loader = document.querySelector(".smallLoadingAnimation");
loader.classList.remove("hidden");

var saloons = db.collection("saloons").doc("Saloon Profiles");

saloons.get().then((doc) => {
    if (doc.exists) {
      let barberServices = [];
      var data = doc.data()
      for (var key in data)
      {
        if([key] == firebase.auth().currentUser.uid)
        {
          barberServices = data[key]["services"];
        }
       
      }
    updateProfileServices(barberServices);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
//////////////////////// EDN OF DATA FETCHING ///////////////////////////

document.querySelector("#addServiceButton").addEventListener("click", addNewService);
document.getElementById("serviceDescription").addEventListener("change", getSelectedServicedDecription);
document.getElementById("servicePrice").addEventListener("change", getSelectedServicePrice);

function getSelectedServicedDecription()
{
  document.getElementById("serviceDescription").style.borderStyle = "none";

  var selectedServiceDecription = document.getElementById("serviceDescription");
  var serviceValue = selectedServiceDecription.options[selectedServiceDecription.selectedIndex].value;
  var serviceText = selectedServiceDecription.options[selectedServiceDecription.selectedIndex].text;
  return serviceText;
}

function getSelectedServicePrice()
{
  document.getElementById("servicePrice").style.borderStyle = "none";

  var selectedServicePrice = document.getElementById("servicePrice");
  var priceValue = selectedServicePrice.options[selectedServicePrice.selectedIndex].value;
  var priceText = selectedServicePrice.options[selectedServicePrice.selectedIndex].text;
  return priceText;
}

function updateProfileServices(barberServices)
{
  loader.classList.add("hidden");
  loader.classList.add("d-none");

  // console.log(barberServices);
  // console.log(barberServices);
  console.log("fethcing services...");
  let numberOfexistingServices = Object.keys(barberServices).length;
  let existingServiceDescription= "";
  let existingServicePrice = "";

  for (i=1; i<=numberOfexistingServices; i++)
  {
      existingServiceDescription= barberServices["service"+i]["service"+i+"Description"];
      existingServicePrice = barberServices["service"+i]["service"+i+"Price"];

      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let button = document.createElement("button");

      button.type = 'button';
      button.border = "none";
      button.id = "removeServiceButton";
      button.style.backgroundColor = "rgb(236, 79, 79)";
      button.style.width = "30px";
      button.style.height = "30px";
      button.style.display="flex";
      button.style.justifyContent = "center";
      button.style.alignItems ="center";
      button.innerHTML = "<img src='images/remove.png'></img>";
      // td3.style.border = "none";
      // td3.style.borderRight = "solid 0.1px black";
      // td3.style.borderBottom = "solid 0.1px black";
      td3.style.boxShadow  = "none";
      td3.style.width = "1%";
      td1.style.textAlign = "right";
      td1.style.paddingRight = "5px";
      td2.style.textAlign = "center";
      td2.style.width = "1%";
      // button.style.background = "url('images/remove.png') no-repeat cover";
      td1.innerText =""+existingServiceDescription;
      td2.innerText = ""+existingServicePrice;
      tr.classList.add("serviceTableRow");
      td1.classList.add("serviceCell");
      td2.classList.add("priceCell");
      tr.style.boxShadow= "none";

      td3.appendChild(button);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      function removeService()
        {
          tr.classList.add("d-none");
          tr.classList.remove("serviceTableRow");
          // i = i-1;
          document.getElementById("saveSaloonProfileServices").style.opacity = 1;
          document.getElementById("saveSaloonProfileServices").style.borderStyle = "solid";
          document.getElementById("saveSaloonProfileServices").style.borderWidth = "2px";
          document.getElementById("saveSaloonProfileServices").style.borderColor = "red";
          document.getElementById("saveSaloonProfileServices").classList.remove("disabled");
        }
      function insertAfter(referenceNode, newNode)
      {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }

      var appendingElement = document.getElementById("appendServicesAfterThisRow")
      insertAfter(appendingElement,tr);
      document.getElementById("removeServiceButton").addEventListener('click',removeService);

  }
  // i = numberOfexistingServices;
}

function addNewService()
{
  if(getSelectedServicedDecription() != "Service" && getSelectedServicePrice() != "Price")
  {
      document.getElementById("saveSaloonProfileServices").classList.remove("disabled");
      document.getElementById("saveSaloonProfileServices").style.removeProperty("opacity");
      document.getElementById("saveSaloonProfileServices").style.borderStyle = "solid";
      document.getElementById("saveSaloonProfileServices").style.borderWidth = "2px";
      document.getElementById("saveSaloonProfileServices").style.borderColor = "red";

      let i = 1;

      console.log("inside addNewService...");
      if (i<=20)
      {
          let tr = document.createElement("tr");
          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let button = document.createElement("button");

          button.type = 'button';
          button.border = "none";
          button.id = "removeServiceButton";
          button.style.backgroundColor = "rgb(236, 79, 79)";
          button.style.width = "30px";
          button.style.height = "30px";
          button.style.display="flex";
          button.style.justifyContent = "center";
          button.style.alignItems ="center";
          button.innerHTML = "<img src='images/remove.png'></img>";
          // td3.style.border = "none";
          // td3.style.borderRight = "solid 0.1px black";
          // td3.style.borderBottom = "solid 0.1px black";
          td3.style.boxShadow  = "none";
          td3.style.width = "1%";
          td1.style.textAlign = "right";
          td1.style.paddingRight = "5px";
          td2.style.textAlign = "center";
          td2.style.width = "1%";
          // td3.style.border = "none !importanrt";
          // td3.style.borderRight = "solid 0.1px black";
          // td3.style.borderBottom = "solid 0.1px black";
          // td3.style.width = "1%";

          td1.innerText =""+getSelectedServicedDecription();
          td2.innerText = ""+getSelectedServicePrice();
          tr.classList.add("serviceTableRow");
          td1.classList.add("serviceCell");
          td2.classList.add("priceCell");

          td3.appendChild(button);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          function removeService()
            {
              tr.classList.add("d-none");
              tr.classList.remove("serviceTableRow");
              i = i-1;
              document.getElementById("saveSaloonProfileServices").style.borderStyle = "solid";
              document.getElementById("saveSaloonProfileServices").style.borderWidth = "2px";
              document.getElementById("saveSaloonProfileServices").style.borderColor = "red";
              document.getElementById("saveSaloonProfileServices").style.opacity = 1;
              document.getElementById("saveSaloonProfileServices").classList.remove("disabled");
            }
          function insertAfter(referenceNode, newNode)
          {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
          }

          var appendingElement = document.getElementById("appendServicesAfterThisRow")
          insertAfter(appendingElement,tr);

          i = i + 1;
      }
}
if(getSelectedServicedDecription() == "Service")
{
  document.getElementById("serviceDescription").style.borderStyle = "solid";
  document.getElementById("serviceDescription").style.borderWidth = "2px";
  document.getElementById("serviceDescription").style.borderColor = "red";

}
if(getSelectedServicePrice() == "Price")
{
  document.getElementById("servicePrice").style.borderStyle = "solid";
  document.getElementById("servicePrice").style.borderWidth = "2px";
  document.getElementById("servicePrice").style.borderColor = "red";
}
    document.getElementById("removeServiceButton").addEventListener('click',removeService);
}

////////////////// Start of Sending Services To Database //////////////

document.getElementById("saveSaloonProfileServices").addEventListener("click", sendServicesToDatabase);

function sendServicesToDatabase()
{
  let serviceTableRowCollection = [];
  document.querySelectorAll(".serviceTableRow").forEach(appednToServiceTableRowsCollection);
  let serviceDescriptionAndPrice = {};
  let saloonServices = {};
  let saloonServicesToDatabase = {};

  function appednToServiceTableRowsCollection(item)
  {
    serviceTableRowCollection.push(item);
  }
  for(i=0;i<serviceTableRowCollection.length;i++)
  {
    // console.log(serviceTableRowCollection[i].querySelector(".serviceCell").innerText)
    // console.log(serviceTableRowCollection[i].querySelector(".priceCell").innerText)
    // saloonServices["service"+(i+1)] = serviceTableRowCollection[i].querySelector(".serviceCell").innerText;
    serviceDescriptionAndPrice["service"+(i+1)+"Description"] = serviceTableRowCollection[i].querySelector(".serviceCell").innerText;
    serviceDescriptionAndPrice["service"+(i+1)+"Price"] = serviceTableRowCollection[i].querySelector(".priceCell").innerText;
    saloonServices["service"+(i+1)] = serviceDescriptionAndPrice;
    serviceDescriptionAndPrice = {};
  }
  console.log(saloonServices);
  saloonServicesToDatabase["services"] = saloonServices;
  console.log("To Database :"+saloonServicesToDatabase);

    let saloonID = firebase.auth().currentUser.uid;
    console.log(saloonID);

    Swal.fire({
      position: 'middle',
      icon: 'success',
      title: 'saved',
      showConfirmButton: false,
      timer: 1000
    })
    document.getElementById("serviceDescription").selectedIndex = 0;
    document.getElementById("servicePrice").selectedIndex = 0;

    document.getElementById("serviceDescription").style.borderStyle = "none";
    document.getElementById("servicePrice").style.borderStyle = "none";
    
    document.getElementById("saveSaloonProfileServices").style.borderStyle = "none";
    document.getElementById("saveSaloonProfileServices").style.opacity = 0.5;
    document.getElementById("saveSaloonProfileServices").classList.add("disabled");

    var saloonRef = db.collection('saloons').doc('Saloon Profiles').set({
      [saloonID] : {"services": null}
    }, { merge: true });

    var saloonRef = db.collection('saloons').doc('Saloon Profiles').set({
      [saloonID] : saloonServicesToDatabase
    }, { merge: true });

}
////////////////// End of Sending Services To Database //////////////

// document.querySelector("#bookingButton").addEventListener("click", function()
//   {
//     console.log("button clicked");
//     clientName = document.querySelector("#clientName").value;
//     console.log("name: "+clientName);
//     clientPhone = document.querySelector("#clientPhone").value;
//     console.log("phone: "+clientPhone);
//     clientOrder ={clientName:clientName, clientPhone:clientPhone,clientRequestedServices:clientRequestedServices};
//     console.log(clientOrder);

//       let clientID = uuidv4();
//       let barberProfile = {};

//       let key = clientID;
//       let newClient = {};
//       newClient[key]= clientOrder;
//       let clients = {clients:newClient};

//       var cityRef = db.collection('saloons').doc('Saloon Profiles').set({
//         [barberID] : clients
//       }, { merge: true });

//       // var setWithMerge = cityRef.set({
//       //     capital: true
//       // }, { merge: true });

//   }
