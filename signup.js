// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
//
// firebase.auth.Auth.Persistence.LOCAL;

document.getElementById("easternCities").classList.remove("d-none")
document.getElementById("easternCities").disabled = true;

document.querySelector(".form-select-province").addEventListener("change", provinceFilter);
var selectedProvinceValue = 0;
var selectedCityValue = 0;
var selectedCityText = "";
var newSaloonProvince = "";
var selectedProvinceText = "";
function provinceFilter()
{
  console.log("inside signup.js!")
  var selectedProvince = document.querySelector(".form-select-province")
  selectedProvinceValue = selectedProvince.options[selectedProvince.selectedIndex].value;// get selected option value
  selectedProvinceText = selectedProvince.options[selectedProvince.selectedIndex].text;

  switch (selectedProvinceText)
  {
    case "المنطقة الشرقية (Eastern Province)": newSaloonProvince = "المنطقة الشرقية";
    break;
    case "حائل (Hael)": newSaloonProvince = "حائل";
    break;
    case "مكة المكرمة (Makkah)": newSaloonProvince = "مكة المكرمة";
    break;
    case "عسير (Aseer)": newSaloonProvince = "عسير";
    break;
    case "الرياض (Riyadh)": newSaloonProvince = "الرياض";
    break;
    case "المدينة المنورة (Al-Madinah)": newSaloonProvince = "المدينة المنورة";
    break;
    case "القصيم (Al-Qassim)": newSaloonProvince = "القصيم";
    break;
    case "تبوك (Tabouk)": newSaloonProvince = "تبوك";
    break;
    case "نجران (Najran)": newSaloonProvince = "نجران";
    break;
    case "جازان (Jazan)": newSaloonProvince = "جازان";
    break;
    default:
    newSaloonProvince = "";
  }
  localStorage.setItem("newSaloonProvince", newSaloonProvince);

  if(selectedProvinceText == "المنطقة الشرقية (Eastern Province)")
  {
    document.getElementById("easternCities").disabled = false;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("easternCities").classList.remove("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".eastern").forEach(showElement);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(showElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      document.getElementById("easternCities").addEventListener("change", function(){
        var selectedCity = document.getElementById("easternCities");
        selectedCityValue = selectedCity.options[selectedCity.selectedIndex].value;// get selected option value
        selectedCityText = selectedCity.options[selectedCity.selectedIndex].text;
        localStorage.setItem("newSaloonCity", selectedCityText);
        console.log(selectedProvince)
      });
    console.log(selectedProvinceText)
  }
  else if(selectedProvinceText == "حائل (Hael)")
  {
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("haelCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(showElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(showElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
    document.getElementById("haelCities").addEventListener("change", function(){
      var selectedCity = document.getElementById("haelCities");
      selectedCityText = selectedCity.options[selectedCity.selectedIndex].text;
      localStorage.setItem("newSaloonCity", selectedCityText);
      console.log(selectedCityText);
      });
    console.log(selectedProvinceText)
  }
  else if(selectedProvinceText == "مكة المكرمة (Makkah)")
  {
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("makkahCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".makkah").forEach(showElement);

    document.querySelectorAll(".eastern").forEach(hideElement);
    
    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(showElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
      document.getElementById("makkahCities").addEventListener("change", function(){
        var selectedCity = document.getElementById("makkahCities");
        selectedCityText = selectedCity.options[selectedCity.selectedIndex].text;
        localStorage.setItem("newSaloonCity", selectedCityText);
        console.log(selectedCityText);
      });
    console.log(selectedProvinceText)
  }
  else if(selectedProvinceText == "عسير (Aseer)")
  {
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("aseerCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".aseer").forEach(showElement);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);
    
    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
      document.getElementById("aseerCities").addEventListener("change", function(){
        var selectedCity = document.getElementById("aseerCities");
        selectedCityText = selectedCity.options[selectedCity.selectedIndex].text;
        localStorage.setItem("newSaloonCity", selectedCityText);
        console.log(selectedCityText);
      });
      console.log(selectedProvinceText)
  }
  else if(selectedProvinceText == "الرياض (Riyadh)")
  {
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("riyadhCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".riyadh").forEach(showElement);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
      document.getElementById("riyadhCities").addEventListener("change", function(){
        var selectedCity = document.getElementById("riyadhCities");
        selectedCityText = selectedCity.options[selectedCity.selectedIndex].text;
        localStorage.setItem("newSaloonCity", selectedCityText);
        console.log(selectedCityText);
      });
      console.log(selectedProvinceText)
  }
  else if(selectedProvinceText == "المدينة المنورة (Al-Madinah)")
  {
    console.log("Madinah selected");
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("madinahCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".madinah").forEach(showElement);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
    document.getElementById("madinahCities").addEventListener("change", function(){
      var selectedCity = document.getElementById("madinahCities");
      selectedCityText = selectedCity.options[selectedCity.selectedIndex].text;
      localStorage.setItem("newSaloonCity", selectedCityText);
      console.log(selectedCityText);
      });
    console.log(selectedProvinceText)
  }
  else if(selectedProvinceText == "القصيم (Al-Qassim)")
  {
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("qassimCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".qassim").forEach(showElement);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
    document.getElementById("qassimCities").addEventListener("change", function(){
      var selectedCity = document.getElementById("qassimCities");
      selectedCityText = selectedCity.options[selectedCity.selectedIndex].text;
      localStorage.setItem("newSaloonCity", selectedCityText);
      console.log(selectedCityText);
      });
    console.log(selectedProvinceText)
  }
  else if(selectedProvinceText == "تبوك (Tabouk)")
  {
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("taboukCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".tabouk").forEach(showElement);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
      document.getElementById("taboukCities").addEventListener("change", function(){
        var selectedCity = document.getElementById("taboukCities");
        selectedCityText = selectedCity.options[selectedCity.selectedIndex].text;
        localStorage.setItem("newSaloonCity", selectedCityText);
        console.log(selectedCityText);
      });
      console.log(selectedProvinceText)
  }
  else if(selectedProvinceText == "نجران (Najran)")
  {
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("najranCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".najran").forEach(showElement);

    document.querySelectorAll(".eastern").forEach(hideElement);
    
    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
      document.getElementById("najranCities").addEventListener("change", function(){
        var selectedCity = document.getElementById("najranCities");
        selectedCityText = selectedCity.options[selectedCity.selectedIndex].text;
        localStorage.setItem("newSaloonCity", selectedCityText);
        console.log(selectedCityText);
      });
    console.log(selectedProvinceText)
  }
  else if(selectedProvinceText == "جازان (Jazan)")
  {
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;

    document.getElementById("jazanCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")

    document.querySelectorAll(".jazan").forEach(showElement);

    document.querySelectorAll(".eastern").forEach(hideElement);
    
    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
      document.getElementById("jazanCities").addEventListener("change", function(){
        var selectedCity = document.getElementById("jazanCities");
        selectedCityText = selectedCity.options[selectedCity.selectedIndex].text;
        localStorage.setItem("newSaloonCity", selectedCityText);
        console.log(selectedCityText);
      });
    console.log(selectedProvinceText)
  }
  else{
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("easternCities").disabled = true;
    document.getElementById("easternCities").classList.remove("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".eastern").forEach(showElement);

    document.querySelectorAll(".makkah").forEach(showElement);

    document.querySelectorAll(".hael").forEach(showElement);

    document.querySelectorAll(".aseer").forEach(showElement);

    document.querySelectorAll(".riyadh").forEach(showElement);

    document.querySelectorAll(".madinah").forEach(showElement);

    document.querySelectorAll(".qassim").forEach(showElement);

    document.querySelectorAll(".tabouk").forEach(showElement);

    document.querySelectorAll(".najran").forEach(showElement);

    document.querySelectorAll(".jazan").forEach(showElement);

    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
    console.log(selectedProvinceText)
  }
}
//////////////////////////////////  Vlidation Code  /////////////////////////////////////

let nameIsValid = false;
let emailIsValid = false;
let passwordIsValid = false;
let provinceIsValid = false;
let cityIsValid = false;

document.getElementById("newSaloonName").addEventListener('input', validateName);

function validateName()
{
  if (document.getElementById("newSaloonName").value != "")
  {
    document.getElementById("required1").classList.add("d-none");
    document.getElementById("required11").classList.remove("d-none");
    nameIsValid = true;
  }
else
  {
    document.getElementById("required1").classList.remove("d-none");
    document.getElementById("required11").classList.add("d-none");
    nameIsValid = false;
  }
}

document.getElementById("email").addEventListener('input', validateEmail);

function validateEmail()
  {
    document.getElementById("required2").innerText = "*Required";
    let enteredEmail = document.getElementById("email").value;
    let emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (enteredEmail.match(emailFormat))
    {
      console.log("valid email format");
      document.getElementById("required2").classList.add("d-none");
      document.getElementById("required22").classList.remove("d-none");
      emailIsValid = true;
    }
    else
    {
      console.log("invalid email format");
      document.getElementById("required2").classList.remove("d-none");
      document.getElementById("required22").classList.add("d-none");
      emailIsValid = false;
    }
  }
document.getElementById("password").addEventListener('input', validatePassword);

function validatePassword()
  {
    if (document.getElementById("password").value.length >= 6)
    {
      document.getElementById("required3").classList.add("d-none");
      document.getElementById("required33").classList.remove("d-none");
      passwordIsValid = true;
    }
  else
    {
      document.getElementById("required3").classList.remove("d-none");
      document.getElementById("required33").classList.add("d-none");
      passwordIsValid = false;
    }
  }

document.querySelector(".form-select-province").addEventListener('change', validateProvince);

function validateProvince()
  {
    if (document.querySelector(".form-select-province").value >= 1)
    {
      document.getElementById("required4").classList.add("d-none");
      document.getElementById("required44").classList.remove("d-none");
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      provinceIsValid = true;
    }
  else
    {
      document.getElementById("required4").classList.remove("d-none");
      document.getElementById("required44").classList.add("d-none");
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      provinceIsValid = false;
    }
  }

document.getElementById("easternCities").addEventListener('change', validateEasternCities);

function validateEasternCities()
  {
    if (document.getElementById("easternCities").value >= 1)
    {
      document.getElementById("required5").classList.add("d-none");
      document.getElementById("required55").classList.remove("d-none");
      cityIsValid = true;
    }
  else
    {
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      cityIsValid = false;
    }
  }

document.getElementById("haelCities").addEventListener('change', validateHaelCities);

function validateHaelCities()
  {
    if (document.getElementById("haelCities").value >= 1)
    {
      document.getElementById("required5").classList.add("d-none");
      document.getElementById("required55").classList.remove("d-none");
      cityIsValid = true;
    }
  else
    {
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      cityIsValid = false;
    }
  }

document.getElementById("makkahCities").addEventListener('change', validateMakkahCities);

function validateMakkahCities()
  {
    if (document.getElementById("makkahCities").value >= 1)
    {
      document.getElementById("required5").classList.add("d-none");
      document.getElementById("required55").classList.remove("d-none");
      cityIsValid = true;
    }
  else
    {
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      cityIsValid = false;
    }
  }

document.getElementById("aseerCities").addEventListener('change', validateAseerCities);

function validateAseerCities()
{
  if (document.getElementById("aseerCities").value >= 1)
    {
      document.getElementById("required5").classList.add("d-none");
      document.getElementById("required55").classList.remove("d-none");
      cityIsValid = true;
    }
  else
    {
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      cityIsValid = false;
    }
}

document.getElementById("riyadhCities").addEventListener('change', validateRiyadhCities);

function validateRiyadhCities()
  {
    if (document.getElementById("riyadhCities").value >= 1)
    {
      document.getElementById("required5").classList.add("d-none");
      document.getElementById("required55").classList.remove("d-none");
      cityIsValid = true;
    }
  else
    {
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      cityIsValid = false;
    }
  }

document.getElementById("madinahCities").addEventListener('change', validateMadinahCities);

function validateMadinahCities()
  {
    if (document.getElementById("madinahCities").value >= 1)
    {
      document.getElementById("required5").classList.add("d-none");
      document.getElementById("required55").classList.remove("d-none");
      cityIsValid = true;
    }
  else
    {
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      cityIsValid = false;
    }
  }

document.getElementById("qassimCities").addEventListener('change', validateQassimCities);

function validateQassimCities()
  {
    if (document.getElementById("qassimCities").value >= 1)
    {
      document.getElementById("required5").classList.add("d-none");
      document.getElementById("required55").classList.remove("d-none");
      cityIsValid = true;
    }
  else
    {
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      cityIsValid = false;
    }
  }

document.getElementById("taboukCities").addEventListener('change', validateTaboukCities);

function validateTaboukCities()
{
  if (document.getElementById("taboukCities").value >= 1)
    {
      document.getElementById("required5").classList.add("d-none");
      document.getElementById("required55").classList.remove("d-none");
      cityIsValid = true;
    }
  else
    {
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      cityIsValid = false;
    }
}

document.getElementById("najranCities").addEventListener('change', validateNajranCities);

function validateNajranCities()
  {
    if (document.getElementById("najranCities").value >= 1)
    {
      document.getElementById("required5").classList.add("d-none");
      document.getElementById("required55").classList.remove("d-none");
      cityIsValid = true;
    }
  else
    {
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      cityIsValid = false;
    }
  }

document.getElementById("jazanCities").addEventListener('change', validateJazanCities);

function validateJazanCities()
  {
    if (document.getElementById("jazanCities").value >= 1)
    {
      document.getElementById("required5").classList.add("d-none");
      document.getElementById("required55").classList.remove("d-none");
      cityIsValid = true;
    }
  else
    {
      document.getElementById("required5").classList.remove("d-none");
      document.getElementById("required55").classList.add("d-none");
      cityIsValid = false;
    }
  }

$("#createAccount").click(function(){
  var email = $("#email").val();
  var password = $("#password").val();
  var newSaloonName = $("#newSaloonName").val();

  var newSaloonCity = selectedCityText;
console.log(newSaloonProvince+", "+newSaloonCity+", "+newSaloonName);
if(email != "" && emailIsValid && password != "" && passwordIsValid && newSaloonName != "" &&
newSaloonProvince != "" && provinceIsValid && newSaloonCity != "" && cityIsValid)
{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("signed up successfully...");
      })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      if(errorMessage == "The email address is already in use by another account.")
      {
        document.getElementById("required2").innerText = "The email address is already in use by another account";
        document.getElementById("required2").style.color  =  "red";
        document.getElementById("required2").style.fontSize  =  "14px";
        document.getElementById("required2").classList.remove("d-none");
        document.getElementById("required22").classList.add("d-none");
      }
      
      
    });
}

if(newSaloonName == "")
{
  document.getElementById("required1").style.color = "red";
  validateName();
}

if(!emailIsValid)
{
  document.getElementById("required2").style.color = "red";
  validateEmail();
}

if(!passwordIsValid)
{
  document.getElementById("required3").style.color = "red";
  validatePassword();
}

if(!provinceIsValid)
{
  document.getElementById("required4").style.color = "red";
  validateProvince();
}

if(!cityIsValid)
{
  document.getElementById("required5").style.color = "red";
  validateEasternCities();
  validateHaelCities();
  validateJazanCities();
  validateMadinahCities();
  validateNajranCities();
  validateRiyadhCities();
  validateTaboukCities();
  validateQassimCities();
  validateAseerCities();
  validateMakkahCities();
}

// else
// {
//   alert("Please fill in all empty fields");
// }
});
