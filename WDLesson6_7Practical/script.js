let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    build += `<div class="fitted card">
                <h3>${car.on_street_name}</h3>
                 <hr>
                 <p># Date: ${car.crash_date}</p>
                 <p># Time: ${car.crash_time}</p>
                 <p># Injured: ${car.number_of_persons_injured}</p>
                 <hr>
                 <p># Contributing factor: ${car.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p># Vehicle Type: ${car.vehicle_type_code1}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByModel(){
  let output = document.getElementById("output");
  let mod = document.getElementById("model").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.vehicle_type_code1 == mod){
      build += `<div class="fitted card">
                <h3>${car.on_street_name}</h3>
                 <hr>
                 <p># Date: ${car.crash_date}</p>
                 <p># Time: ${car.crash_time}</p>
                 <p># Injured: ${car.number_of_persons_injured}</p>
                 <hr>
                 <p># Contributing factor: ${car.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p># Vehicle Type: ${car.vehicle_type_code1}</p>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByInjured(){
  let output = document.getElementById("output");
  let inj = document.getElementById("injured").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.number_of_persons_injured == inj){
     build += `<div class="fitted card">
                <h3>${car.on_street_name}</h3>
                 <hr>
                 <p># Date: ${car.crash_date}</p>
                 <p># Time: ${car.crash_time}</p>
                 <p># Injured: ${car.number_of_persons_injured}</p>
                 <hr>
                 <p># Contributing factor: ${car.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p># Vehicle Type: ${car.vehicle_type_code1}</p>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.
function filterByDate(){
  let output = document.getElementById("output");
  let date = document.getElementById("date").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.crash_date == date){
     build += `<div class="fitted card">
                <h3>${car.on_street_name}</h3>
                 <hr>
                 <p># Date: ${car.crash_date}</p>
                 <p># Time: ${car.crash_time}</p>
                 <p># Injured: ${car.number_of_persons_injured}</p>
                 <hr>
                 <p># Contributing factor: ${car.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p># Vehicle Type: ${car.vehicle_type_code1}</p>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

//============================================================================================================================================================
function filterByMP(){
  let output = document.getElementById("output");
  let model = document.getElementById("model").value;
  let injured = document.getElementById("injured").value;
  let result = document.getElementById("result");
  console.log("Model" + model);
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.vehicle_type_code1 == model && car.number_of_persons_injured == injured){
     build += `<div class="fitted card">
                <h3>${car.on_street_name}</h3>
                 <hr>
                 <p># Date: ${car.crash_date}</p>
                 <p># Time: ${car.crash_time}</p>
                 <p># Injured: ${car.number_of_persons_injured}</p>
                 <hr>
                 <p># Contributing factor: ${car.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p># Vehicle Type: ${car.vehicle_type_code1}</p>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}