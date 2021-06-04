              console.log("Inside clients JS")

              let clientDictionaryLength = 0;
              let saloonClients = localStorage.getItem("saloonClients");
              let clientsIsEmpty = localStorage.getItem("clientsIsEmpty");
              let saloonID = localStorage.getItem("saloonID");
              document.querySelector("tbody").id = saloonID;
              //clients
              let parsedSaloonClients = []
              
              if (clientsIsEmpty == "false"){
                parsedSaloonClients = JSON.parse(saloonClients);
                console.log("clients dictionary length is: "+(Object.keys(parsedSaloonClients).length));
              }
              
              let clientText = ""
              let j = 0;

              // for (var key in parsedSaloonClients)
              // {
              //   j = j+1;
              //   clientText = parsedSaloonClients[key]
              //   // console.log(clientText);
              //   let clientName = clientText["clientName"];
              //   let clientPhone = clientText["clientPhone"];
              //   let clientBookedServices = clientText["clientRequestedServices"];

              //   // console.log("client name is: "+clientName);
              //   // console.log("client phone is: "+clientPhone);
              //   // console.log("client rquested services are: "+clientBookedServices);
              //   console.log("client name:  "+clientName+"client phone: "+clientPhone+"client booked: "+clientBookedServices);
              //   addNewClient(clientName, clientPhone, clientBookedServices);
              // }

              // db.collection("saloons").doc("Saloon Profiles").onSnapshot((doc) => {
              //     console.log("Current data: ", doc.data());
              // });
              ///////////////////////////////
               db.collection("saloons").doc("Saloon Profiles")
                 .onSnapshot((doc) => {
                    let data = doc.data();
                     for (var key in data)
                     {
                       if (data[key]["saloonID"] == firebase.auth().currentUser.uid)
                       {
                       }
                     }
                });
              /////////////////////// Sart Real-time database listener ////////////////////////
              const loader = document.querySelector(".smallLoadingAnimation");
              loader.classList.remove("hidden");

              db.collection("clients").onSnapshot((snapshot) => {
                  let changes  = snapshot.docChanges();
                  if (changes == "")
                  {
                    loader.classList.add("hidden");
                    loader.classList.add("d-none");
                  }
                  
                  console.log(snapshot);

                  changes.forEach(change => {
                  let  changeType = change.type; 
                  let data = change.doc.data();

                  if(Object.keys(data).length == 0 || data[saloonID] == null )
                  {
                    loader.classList.add("hidden");
                    loader.classList.add("d-none"); 
                  }
                    if((changeType == "modified" || changeType == "added"))
                    {
                      // if (document.querySelectorAll(".newClientRow").length > 0)
                      //     {
                      //       document.querySelectorAll(".newClientRow").forEach(function(item){
                          
                      //         item.classList.add("d-none");
                          
                      //       });
                      //     }
                     
                      let counter = 0;
                      for (var key in data)
                      {
                        if (counter == 0 && data[key]["saloonID"] == firebase.auth().currentUser.uid)
                        {
                          console.log(data[key]["saloonID"]);
                          console.log(firebase.auth().currentUser.uid);
                          document.getElementById((data[key]["saloonID"])).innerHTML = "<tr id='startAppendingClientsFromHere'></tr>";
                          console.log("Modified or added");
                          counter = 1;
                        }
                        if((data[key]["saloonID"] == firebase.auth().currentUser.uid))
                        {
                          let clientID = data[key]["clientID"];
                          console.log(clientID);
                          let saloonID = data[key]["saloonID"];
                          let clientName = data[key]["clientName"];
                          let clientPhone =  data[key]["clientPhone"];
                          let clientBookedServices = data[key]["clientRequestedServices"];
  
                          console.log(saloonID);
                          console.log(clientName);
                          console.log(clientPhone);
                          console.log(clientBookedServices);
                          console.log(clientID);
                          addNewClient(clientName, clientPhone, clientBookedServices, clientID);
                          console.log(data[key]);
                        }
                       
                      }
    
                    }
                })
              }, (error) => {
                console.log("error getting data");
            });
            ////////////////////// End of Real-time database listener ///////////////////////
  
function addNewClient(clientName, clientPhone, clientBookedServices, clientID)
{
  loader.classList.add("hidden");
  loader.classList.add("d-none");

  console.log("inside addNewClient Function...");

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");

  let i = 1;

  if (i<=20)
  {

      let button = document.createElement("button");

      button.type = 'button';
      button.border = "none";
      button.id = "removeClientButton";
      button.style.backgroundColor = "rgb(236, 79, 79)";
      button.style.width = "30px";
      button.style.height = "30px";
      button.style.display="flex";
      button.style.justifyContent = "center";
      button.style.alignItems ="center";
      button.innerHTML = "<img src='images/remove.png'></img>";

      td1.innerText =""+clientName;
      td2.innerText = ""+clientPhone;
      td3.innerText = ""+clientBookedServices;
      td4.innerText = ""; // Time and date cell
      td5.style.boxShadow  = "none";
      td5.style.width = "1%";
      td5.style.padding = "0";
      tr.classList.add("newClientRow");

      td5.appendChild(button);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      function insertAfter(referenceNode, newNode)
      {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }

      var appendingElement = document.getElementById("startAppendingClientsFromHere")
      insertAfter(appendingElement,tr);

      i = i + 1;
    }

  document.getElementById("removeClientButton").addEventListener('click',function(){
    
    let i = 1;
    tr.classList.add("d-none");
    tr.classList.remove("clientTableRow");
    i = i-1;

    // Remove client from the "clients" database...
    var clientsRef = db.collection('clients').doc(saloonID).set({
      [clientID] : {}
    }, { merge: true });
  });
 
}
