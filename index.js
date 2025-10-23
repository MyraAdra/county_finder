let countries = [];


function loadAPIData() {

    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
        .then(response => response.json())
        .then(json => {

            json.forEach(country => {
                //console.log(country);
                let new_country ={name: country.name.common,
                                  flag: country.flags.png}  

                countries.push(new_country);                  
        
            });
        })

}

loadAPIData()


function loadAllCountries() {

    let country_ddl = document.getElementById("country_ddl");

    countries.forEach(country => {

    let country_option = document.createElement("option");
    country_option.innerHTML = country.name;
    country_ddl.appendChild(country_option);

    })



    let flagdiv = document.getElementById("flagdiv");

    countries.forEach(country => {

    let country_image = document.createElement("img");
    country_image.src = country.flag;
    country_image.className ='flag';
    flagdiv.appendChild(country_image);

    country_image.addEventListener("click", function() {
            alert(country.name);
        });

    })

}

function display_name(){

    
    let country_ddl = document.getElementById("country_ddl");
    let chosen_country = country_ddl.value;

    //let topddiv = document.getElementById("topdiv");
    let span_name = document.getElementById("span_name");
    span_name.innerHTML = chosen_country;

    //alert(chosen_country);



}
    



// fetch('https://restcountries.com/v3.1/all?fields=name,flags')
//   .then(response => response.json())
//   .then(json => {
//     json.forEach(element => {
//       countries.push({
//         name: element.name.common,
//         flag: element.flags.png,
//       });
//     });
//   });


// function loadAllCountries() {

//     fetch('https://restcountries.com/v3.1/all?fields=name,flags')
//         .then((response) => response.json())
//         .then(json => 
//             json.forEach((element) => {
//                 countries.push({
//                     name: element.name.common,
//                      flag: element.flags.png,
//                  });
       
//             });
//         );

// }