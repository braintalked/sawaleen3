
let selectedProvinceSalons = [];

document.getElementById("easternCities").classList.remove("d-none")
document.getElementById("easternCities").disabled = true;

document.querySelector(".form-select-province").addEventListener("change", provinceFilter);
document.getElementById("easternCities").addEventListener("change", cityFilter);
document.getElementById("haelCities").addEventListener("change", cityFilter);
document.getElementById("makkahCities").addEventListener("change", cityFilter);
document.getElementById("riyadhCities").addEventListener("change", cityFilter);
document.getElementById("aseerCities").addEventListener("change", cityFilter);
document.getElementById("madinahCities").addEventListener("change", cityFilter);
document.getElementById("qassimCities").addEventListener("change", cityFilter);
document.getElementById("taboukCities").addEventListener("change", cityFilter);
document.getElementById("najranCities").addEventListener("change", cityFilter);
document.getElementById("jazanCities").addEventListener("change", cityFilter);

function provinceFilter()
{
  console.log("inside homePageScript.js!")
  var selectedProvince = document.querySelector(".form-select-province")
  var value = selectedProvince.options[selectedProvince.selectedIndex].value;// get selected option value
  var text = selectedProvince.options[selectedProvince.selectedIndex].text;
  if(text == "المنطقة الشرقية")
  {
    console.log("eastern selected")
    selectedProvinceSalons = [];

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
    document.querySelectorAll(".eastern").forEach(appendToSelectedSalons);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

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
      function appendToSelectedSalons(elem)
      {
        selectedProvinceSalons.push(elem);
      }
      console.log(text);
      console.log(selectedProvinceSalons);
    }
  else if(text == "حائل")
  {
    selectedProvinceSalons = [];

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

    document.querySelectorAll(".hael").forEach(showElement);
    document.querySelectorAll(".hael").forEach(appendToSelectedSalons);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

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
      function appendToSelectedSalons(elem)
      {
        selectedProvinceSalons.push(elem);
      }
      console.log(text);
      console.log(selectedProvinceSalons);
    }
  else if(text == "مكة المكرمة")
  {
    selectedProvinceSalons = [];

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
    document.querySelectorAll(".makkah").forEach(appendToSelectedSalons);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);
 
    document.querySelectorAll(".aseer").forEach(hideElement);

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
        function appendToSelectedSalons(elem)
        {
          selectedProvinceSalons.push(elem);
        }
    console.log(text);
    console.log(selectedProvinceSalons);
  }
  else if(text == "عسير")
  {
    selectedProvinceSalons = [];

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

    document.querySelectorAll(".aseer").forEach(appendToSelectedSalons);

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
        function appendToSelectedSalons(elem)
        {
          selectedProvinceSalons.push(elem);
        }
      console.log(text);
      console.log(selectedProvinceSalons);
  }
  else if(text == "الرياض")
  {
    selectedProvinceSalons = [];

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
    document.querySelectorAll(".riyadh").forEach(appendToSelectedSalons);

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
        function appendToSelectedSalons(elem)
        {
          selectedProvinceSalons.push(elem);
        }
        console.log(selectedProvinceSalons);
  }
  else if(text == "المدينة المنورة")
  {
    selectedProvinceSalons = [];

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
    document.querySelectorAll(".madinah").forEach(appendToSelectedSalons);

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
    function appendToSelectedSalons(elem)
      {
        selectedProvinceSalons.push(elem);
      }
    console.log(selectedProvinceSalons)
  }
  else if(text == "القصيم")
  {
    selectedProvinceSalons = [];

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
    document.querySelectorAll(".qassim").forEach(appendToSelectedSalons);

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
    function appendToSelectedSalons(elem)
      {
        selectedProvinceSalons.push(elem);
      }
    console.log(selectedProvinceSalons)
  }
  else if(text == "تبوك")
  {
    selectedProvinceSalons = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("taboukCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".tabouk").forEach(showElement);
    document.querySelectorAll(".tabouk").forEach(appendToSelectedSalons);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

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
      function appendToSelectedSalons(elem)
      {
        selectedProvinceSalons.push(elem);
      }
      console.log(text);
      console.log(selectedProvinceSalons);
    }
  else if(text == "نجران")
  {
    selectedProvinceSalons = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("najranCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")

    document.querySelectorAll(".najran").forEach(showElement);
    document.querySelectorAll(".najran").forEach(appendToSelectedSalons);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);


    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSalons(elem)
      {
        selectedProvinceSalons.push(elem);
      }
      console.log(text);
      console.log(selectedProvinceSalons);
    }
  else if(text == "جازان")
  {
    selectedProvinceSalons = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;

    document.getElementById("jazanCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")

    document.querySelectorAll(".jazan").forEach(showElement);
    document.querySelectorAll(".jazan").forEach(appendToSelectedSalons);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);


    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSalons(elem)
      {
        selectedProvinceSalons.push(elem);
      }
      console.log(text);
      console.log(selectedProvinceSalons);
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
    console.log(text)
  }
}

function cityFilter(e)
{
  let selectedCity = document.getElementById("easternSelected");

  console.log("target id: "+e.target.id);

  if(e.target.id == "haelCities")
  {
    selectedCity = document.getElementById("haelCities");
  }
  else if(e.target.id == "easternCities")
  {
    selectedCity = document.getElementById("easternCities");
  }
  else if(e.target.id == "riyadhCities")
  {
    selectedCity = document.getElementById("riyadhCities");
  }
  else if(e.target.id == "makkahCities")
  {
    selectedCity = document.getElementById("makkahCities");
  }
  else if(e.target.id == "najranCities")
  {
    selectedCity = document.getElementById("najranCities");
  }
  else if(e.target.id == "aseerCities")
  {
    selectedCity = document.getElementById("aseerCities");
  }
  else if(e.target.id == "abhaCities")
  {
    selectedCity = document.getElementById("abhaCities");
  }
  // else if(e.target.id == "joufCities")
  // {
  //   selectedCity = document.getElementById("joufCities");
  // }
  // else if(e.target.id == "northernBordersCities")
  // {
  //   selectedCity = document.getElementById("northernBordersCities");
  // }
  else if(e.target.id == "madinahCities")
  {
    selectedCity = document.getElementById("madinahCities");
  }
  else if(e.target.id == "jazanCities")
  {
    selectedCity = document.getElementById("jazanCities");
  }
  else if(e.target.id == "qassimCities")
  {
    selectedCity = document.getElementById("qassimCities");
  }
  else if(e.target.id == "taboukCities")
  {
    selectedCity = document.getElementById("taboukCities");
  }
  else if(e.target.id == "najranCities")
  {
    selectedCity = document.getElementById("najranCities");
  }
  console.log(selectedCity);
  let cityValue = selectedCity.options[selectedCity.selectedIndex].value;// get selected option value
  let cityText = selectedCity.options[selectedCity.selectedIndex].text;

  console.log(cityText+" is selected...");

  // Eastern Province Cities
  if(cityText == "الظهران")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('الظهران'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الظهران'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الخبر")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('الخبر'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الخبر'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الدمام")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('الدمام'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الدمام'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الجبيل")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('الجبيل'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الجبيل'))
      {
        item.classList.remove("d-none");
      }
    });
  }

  else if(cityText == "الأحساء")
  {
  
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('الأحساء'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الأحساء'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "القطيف")
  {
  
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('القطيف'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('القطيف'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "حفر الباطن")
  {
  
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('حفرالباطن'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('حفرالباطن'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الخفجي")
  {
  
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('الخفجي'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الخفجي'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "النعيرية")
  {
  
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('النعيرية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('النعيرية'))
      {
        item.classList.remove("d-none");
      }
    });
  }

//Hael Province Cities
if(cityText == "مدينة حائل")
{

  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('مدينة حائل'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('مدينة حائل'))
    {
      item.classList.remove("d-none");
    }
  });
} 
else if(cityText == "بقعاء")
{

  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('بقعاء'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('بقعاء'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "قفار")
{

  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('قفار'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('قفار'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الغزالة")
{

  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الغزالة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الغزالة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الشنان")
{

  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الشنان'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الشنان'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "موقق")
{

  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('موقق'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('موقق'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الحائط")
{

  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الحائط'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الحائط'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "السليمي")
{

  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('السليمي'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('السليمي'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الشملي")
{

  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الشملي'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الشملي'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "سميراء")
{

  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('سميراء'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('سميراء'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الحليفة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الحليفة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الحليفة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "جبة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('جبة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('جبة'))
    {
      item.classList.remove("d-none");
    }
  });
}

// Makkah cities
else if(cityText == "الطائف")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الطائف'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الطائف'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "جدة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('جدة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('جدة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "مكة المكرمة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('مكة المكرمة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('مكة المكرمة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "رابغ")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('رابغ'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('رابغ'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "القنفذة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('القنفذة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('القنفذة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الليث")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الليث'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الليث'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "خليص")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('خليص'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('خليص'))
    {
      item.classList.remove("d-none");
    }
  });
}

// Riyadh Cities
else if(cityText == "شمال الرياض")
  {
    console.log("added شمال الرياض");
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('شمالالرياض'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('شمالالرياض'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "جنوب الرياض")
  {
    console.log("add جنوبالرياض");
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('جنوبالرياض'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('جنوبالرياض'))
      {
        console.log("contains جنوب الرياض");
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "شرق الرياض")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('شرقالرياض'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('شرقالرياض'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "غرب الرياض")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('غربالرياض'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('غربالرياض'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  
  // Aseer Cities
  else if(cityText == "أبها")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('أبها'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('أبها'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "خميس مشيط")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('خميسمشيط'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('خميسمشيط'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "النماص")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('النماص'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('النماص'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "تنومة")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('تنومة'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('تنومة'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "رجال ألمع")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('رجالألمع'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('رجالألمع'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "ظهران الجنوب")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('ظهرانالجنوب'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('ظهرانالجنوب'))
      {
        item.classList.remove("d-none");
      }
    });
  }

  // Madinah Cities
  else if(cityText == "الحناكية")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('الحناكية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الحناكية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "العلا")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('العلا'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('العلا'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "ينبع")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('ينبع'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('ينبع'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "ينبع الصناعية")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('ينبعالصناعية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('ينبعالصناعية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "المدينة المنورة")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('المدينةالمنورة'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('المدينةالمنورة'))
      {
        item.classList.remove("d-none");
      }
    });
  }

  // Qassim Cities
  else if(cityText == "عنيزة")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('عنيزة'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('عنيزة'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "بريدة")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('بريدة'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('بريدة'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "البكيرية")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('البكيرية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('البكيرية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "ضرية")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('ضرية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('ضرية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "المذنب")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('المذنب'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('المذنب'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "عيون الجواء")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('عيونالجواء'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('عيونالجواء'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "رياض الخبراء")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('رياضالخبراء'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('رياضالخبراء'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "عقلة الصقور")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('عقلةالصقور'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('عقلةالصقور'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الأسياح")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('الأسياح'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الأسياح'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "النبهانية")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('النبهانية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('النبهانية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الرس")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('الرس'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الرس'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "الشماسية")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('الشماسية'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الشماسية'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "البدائع")
  {
    selectedProvinceSalons.forEach(function(item){
      if (!item.classList.contains('البدائع'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('البدائع'))
      {
        item.classList.remove("d-none");
      }
    });
  }

// Tabouk Cities
else if(cityText == "أملج")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('أملج'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('أملج'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الوجه")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الوجه'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الوجه'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "تيماء")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('تيماء'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('تيماء'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "ضباء")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('ضباء'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('ضباء'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "حقل")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('حقل'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('حقل'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "البدع")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('البدع'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('البدع'))
    {
      item.classList.remove("d-none");
    }
  });
}
// Najran Cities
else if(cityText == "رجلا")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('رجلا'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('رجلا'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "المشعلية")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('المشعلية'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('المشعلية'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "حي الفيصلية")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('حيالفيصلية'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('حيالفيصلية'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "حي الفهد")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('حيالفهد'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('حيالفهد'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "سقام")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('سقام'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('سقام'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الغويلا")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الغويلا'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الغويلا'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الجربة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الجربة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الجربة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الجربة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الجربة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الجربة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الصفا")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الصفا'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الصفا'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الشرفة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الشرفة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الشرفة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "القابل")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('القابل'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('القابل'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "العريسة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('العريسة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('العريسة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "حي الأسكان")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('حيالأسكان'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('حيالأسكان'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "شرق المطار")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('شرقالمطار'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('شرقالمطار'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "يدمة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('يدمة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('يدمة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "حبونا")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('حبونا'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('حبونا'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "نجران البلد")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('نجرانالبلد'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('نجرانالبلد'))
    {
      item.classList.remove("d-none");
    }
  });
}

// Jazan Cities
else if(cityText == "صبيا")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('صبيا'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('صبيا'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "صامطة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('صامطة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('صامطة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "أبو عريش")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('أبوعريش'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('أبوعريش'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "جازان")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('جازان'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('جازان'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "أحد مسارحة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('أحدمسارحة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('أحدمسارحة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "بيش")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('بيش'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('بيش'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "العارضة")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('العارضة'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('العارضة'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "ضمد")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('ضمد'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('ضمد'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الدرب")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الدرب'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الدرب'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "العيدابي")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('العيدابي'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('العيدابي'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الدائر")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الدائر'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الدائر'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الريث")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الريث'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الريث'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الحرث")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الحرث'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الحرث'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "فرسان")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('فرسان'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('فرسان'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "الطوال")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('الطوال'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('الطوال'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "هروب")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('هروب'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('هروب'))
    {
      item.classList.remove("d-none");
    }
  });
}
else if(cityText == "فيفاء")
{
  selectedProvinceSalons.forEach(function(item){
    if (!item.classList.contains('فيفاء'))
    {
      item.classList.add("d-none");
    }
    if (item.classList.contains('فيفاء'))
    {
      item.classList.remove("d-none");
    }
  });
}

// If no city selected
  else if(cityText == "المدينة / الحي")
  {
  selectedProvinceSalons.forEach(function(item){
      item.classList.remove("d-none");
    });
  }
}

document.getElementById("salonLoginOrRegisterButton").addEventListener("click", function(){
  Swal.fire({
    title: '',
    icon: '',
    iconHtml: '',
    confirmButtonText: 'Create Account',
    cancelButtonText: 'Login',
    showCancelButton: true,
    showCloseButton: true
  })
  document.querySelector(".swal2-confirm").addEventListener('click', function(){
    window.location.assign("signup.html")
  });
  document.querySelector(".swal2-cancel").addEventListener('click', function(){
    window.location.assign("signin.html")
  });
});


// document.querySelector(".signup").addEventListener("click", function(){
//   document.querySelector(".signup").classList.add("dim");
//   setTimeout(function(){document.querySelector(".signup").classList.remove("dim");}, 150);
// });


// document.querySelector(".search").addEventListener("click", function(){
//   window.location.href = "http://stackoverflow.com";
//   console.log("search button clicked");
// });
