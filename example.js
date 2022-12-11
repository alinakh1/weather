"use strict"
let cities = [
    {
        name: "New York,NY",
        latitude: 40.6943,
        longitude: -73.9249
    },
    {
        name: "Los Angeles,CA",
        latitude: 34.1141,
        longitude: -118.4068
    },

    {
        name: "Chicago,IL",
        latitude: 41.8375,
        longitude: -87.6866
    },
    {
        name: "Miami,FL",
        latitude: 25.7840,
        longitude: -80.2101
    },
    {
        name: "Dallas,TX",
        latitude: 32.7935,
        longitude: -96.7667
    },
    {
        name: "Houston,TX",
        latitude: 29.7860,
        longitude: -95.3885
    },
    {
        name: "Philadelphia,PA",
        latitude: 40.0077,
        longitude: -75.1339
    },
    {
        name: "Atlanta,GA",
        latitude: 33.7628,
        longitude: -84.4220
    },
    {
        name: "Washington,DC",
        latitude: 38.9047,
        longitude: -77.0163
    },
    {
        name: "Boston,MA",
        latitude: 42.3188,
        longitude: -71.0852
    },
    {
        name: "Phoenix,AZ",
        latitude: 33.5722,
        longitude: -112.0892
    },
    {
        name: "Detroit,MI",
        latitude: 42.3834,
        longitude: -83.1024
    },
    {
        name: "San Francisco,CA",
        latitude: 37.7558,
        longitude: -122.4449
    },
    {
        name: "Seattle,WA",
        latitude: 47.6211,
        longitude: -122.3244
    },
    {
        name: "San Diego,CA",
        latitude: 32.8313,
        longitude: -117.1222
    },
    {
        name: "Seattle,WA",
        latitude: 47.6211,
        longitude: -122.3244
    },
    {
        name: "Minneapolis,MN",
        latitude: 44.9635,
        longitude: -93.2678
    },
    {
        name: "Tampa,FL",
        latitude: 27.9945,
        longitude: -82.4447
    },
    {
        name: "Brooklyn,NY",
        latitude: 40.6501,
        longitude: -73.9496
    },
    {
        name: "Denver,CO",
        latitude: 39.7620,
        longitude: -104.8758
    },
    {
        name: "Baltimore,MD",
        latitude: 39.3051,
        longitude: -76.6144
    },
    {
        name: "Las Vegas,NV",
        latitude: 6.2333,
        longitude: -115.2654
    },
    {
        name: "St. Louis,MO",
        latitude: 38.6359,
        longitude: -90.2451
    },
    {
        name: "Riverside,CA",
        latitude: 33.9381,
        longitude: -117.3949
    },
    {
        name: "Portland,OR",
        latitude: 45.5371,
        longitude: -122.6500
    },
    {
        name: "San Antonio,TX",
        latitude: 29.4632,
        longitude: -98.5238
    },
    {
        name: "Sacramento,CA",
        latitude: 38.5677,
        longitude: -121.4685
    },
    {
        name: "San Juan,PR",
        latitude: 18.3985,
        longitude: -66.0610
    },
    {
        name: "San Jose,CA",
        latitude: 37.3012,
        longitude: -121.8480
    },
    {
        name: "Orlando,FL",
        latitude: 28.4773,
        longitude: -81.3370
    },
    {
        name: "Cleveland,OH",
        latitude: 41.4764,
        longitude: -81.6805
    },
    {
        name: "Pittsburgh,PA",
        latitude: 40.4397,
        longitude: -81.3370
    },
    {
        name: "Manhattan,NY",
        latitude: 40.7834,
        longitude: -73.9662
    },
    {
        name: "Austin,TX",
        latitude: 30.3005,
        longitude: -97.7522
    },
    {
        name: "Cincinnati,OH",
        latitude: 39.1413,
        longitude: -84.5060
    },
    {
        name: "Indianapolis,IN",
        latitude: 39.7771,
        longitude: -86.1458
    },
    {
        name: "Kansas City,MO",
        latitude: 39.1238,
        longitude: -94.5541
    },

    {
        name: "Columbus,OH",
        latitude: 39.9862,
        longitude: -82.9855
    },
    {
        name: "Charlotte,NC",
        latitude: 35.2083,
        longitude: -80.8303
    },
    {
        name: "Virginia Beach,VA",
        latitude: 36.7335,
        longitude: -76.0435
    },
    {
        name: "Bronx,NY",
        latitude: 40.8501,
        longitude: -73.8662
    },
    {
        name: "Milwaukee,WI",
        latitude: 43.0642,
        longitude: -87.9675
    },
    {
        name: "Providence,RI",
        latitude: 41.8230,
        longitude: -71.4187
    },
    {
        name: "Jacksonville,FL",
        latitude: 30.3322,
        longitude: -81.6749
    },
    {
        name: "Salt Lake City,UT",
        latitude: 40.7776,
        longitude: -111.9311
    },
    {
        name: "Nashville,TN",
        latitude: 36.1715,
        longitude: -86.7842
    },
    {
        name: "Raleigh,NC",
        latitude: 35.8324,
        longitude: -78.6429
    },
    {
        name: "Memphis,TN",
        latitude: 35.1087,
        longitude: -89.9663
    },
    {
        name: "Richmond,VA",
        latitude: 37.5295,
        longitude: -77.4756
    },
    {
        name: "Louisville,KY",
        latitude: 38.1663,
        longitude: -85.6485
    },
    {
        name: "New Orleans,LA",
        latitude: 30.0687,
        longitude: -89.9288
    },
    {
        name: "Bridgeport,CT",
        latitude: 41.1918,
        longitude: -73.1954
    },
    {
        name: "Oklahoma City,OK",
        latitude: 35.4676,
        longitude: -97.5136
    },
    {
        name: "Buffalo,NY",
        latitude: 42.9018,
        longitude: -78.8487
    },
    {
        name: "Hartford,CT",
        latitude: 41.7661,
        longtitude: -72.6834
    },
    {
        name: "Fort Worth,TX",
        latitude: 32.7817,
        longtitude: -97.3474
    },
    {
        name: "Tucson,AZ",
        latitude: 32.1541,
        longtitude: -110.8787
    },
    {
        name: "Honolulu,HI",
        latitude: 21.3294,
        longitude: -157.8460
    },
    {
        name: "McAllen,TX",
        latitude: 26.2252,
        longitude: -98.2467
    },
    {
        name: "El Paso,TX",
        latitude: 31.8476,
        longtitude: -106.4300
    },
    {
        name: "Omaha,NE",
        latitude: 41.2627,
        longtitude: -96.0529
    },
    {
        name: "Albuquerque,NM",
        latitude: 35.1054,
        longtitude: -106.6465
    },
    {
        name: "Birmingham,AL",
        latitude: 33.5279,
        longtitude: -86.7971
    },
    {
        name: "Sarasota,FL",
        latitude: 27.3387,
        longtitude: -82.5432
    },
    {
        name: "Dayton,OH",
        latitude: 39.7805,
        longtitude: -84.2003
    },
    {
        name: "Rochester,NY",
        latitude: 43.1680,
        longitude: -77.6162
    },
    {
        name: "Fresno,CA",
        latitude: 36.7830,
        longtitude: -119.7939
    },
    {
        name: "Tulsa,OK",
        latitude: 36.1283,
        longtitude: -95.9042
    },
    {
        name: "Allentown,PA",
        latitude: 40.5961,
        longtitude: -75.4756
    },
    {
        name: "Concord,CA",
        latitude: 37.9722,
        longitude: -122.0016
    },
    {
        name: "Cape Coral,FL",
        latitude: 26.6443,
        longtitude: -81.9957
    },
    {
        name: "Charleston,SC",
        latitude: 32.8168,
        longtitude: -79.9687
    },
    {
        name: "Colorado Springs,CO",
        latitude: 38.8674,
        longtitude: -104.7605
    },
    {
        name: "Springfield,MA",
        latitude: 42.1155,
        longtitude: -72.5395
    },
    {
        name: "Grand Rapids,MI",
        latitude: 42.9619,
        longtitude: -85.6562
    },
    {
        name: "Ogden,UT",
        latitude: 41.2279,
        longitude: -111.9682
    },
    {
        name: "Columbia,SC",
        latitude: 34.0378,
        longitude: -80.9036
    }
]


window.onload = function () {

    let selectCities = document.getElementById("selectCities")
    selectCities.onchange = selectCitiesOnChange;
  
    populateSelectCities();
  }
  
  
  function populateSelectCities(){
   
    let selectCities = document.getElementById("selectCities");
    
    let theOption = document.createElement("option");
    theOption.value = "";
    theOption.textContent = "Choose a City!";
    selectCities.appendChild(theOption);
    
    for (let city of cities){
      let newOption = document.createElement("option");
      newOption.value =city.name;
      newOption.textContent = city.name;
      selectCities.appendChild(newOption);
    }
  }
  
  function selectCitiesOnChange(){
  
    let selectCities = document.getElementById("selectCities").value;
    let selectCitiesLatitude = "";
    let selectCitiesLongitude ="";
    document.getElementById("displayTable").innerHTML =""
     
    for(let city of cities){
      
      if(city.name.includes(selectCities)){
        selectCitiesLatitude = city.latitude
        selectCitiesLongitude = city.longitude
      }
    }
    
    
    fetch(`https://api.weather.gov/points/${selectCitiesLatitude},${selectCitiesLongitude}`)
    .then(response => response.json()) 
    .then(data => {
      let weatherUrl = data.properties.forecast;
      displaytable(weatherUrl)
     } );
     
     if(selectCities == ""){
      document.getElementById("displayTable").style.display = "none"
     }
     else{
      document.getElementById("displayTable").style.display = "block"
     }
     
  }
  
  
  function displaytable(weatherUrl){
    
      let displayTable = document.getElementById("displayTable")
     
      fetch(weatherUrl)
      .then(response => response.json()) 
      .then(data => {
  
         let period = data.properties.periods
        
              for(let i=0; i<period.length; i++) {
               
                 let row = displayTable.insertRow(-1);
                 let cell1 = row.insertCell(0);
                 let cell2 = row.insertCell(1);
                 let cell3 = row.insertCell(2);
                 let cell4 = row.insertCell(3);
                 let cell5 = row.insertCell(4);
                 cell1.innerHTML = period[i].name;
                 cell2.innerHTML = period[i].temperature;
                 cell3.innerHTML = period[i].temperatureUnit;
                 cell4.innerHTML = period[i].shortForecast;
                 cell5.innerHTML = period[i].windSpeed;
                
      } });
  
  }











// window.onload = function init(){

// }


// function loadDropdownForArray(){

// }