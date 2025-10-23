let countries = [];

function loadAPIData() {
  fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    .then(response => response.json())
    .then(json => {
      json.forEach(country => {
        let new_country = {
          name: country.name.common,
          flag: country.flags.png
        };
        countries.push(new_country);
      });
    });
}

loadAPIData();

function loadAllCountries() {
  let country_ddl = document.getElementById("country_ddl");
  let flagdiv = document.getElementById("flagdiv");

  // Clear previous results
  country_ddl.innerHTML = "";
  flagdiv.innerHTML = "";

  // Populate dropdown and flags
  countries.forEach(country => {
    let country_option = document.createElement("option");
    country_option.innerHTML = country.name;
    country_ddl.appendChild(country_option);

    let country_image = document.createElement("img");
    country_image.src = country.flag;
    country_image.className = 'flag';
    flagdiv.appendChild(country_image);

    country_image.addEventListener("click", function() {
      //alert(country.name);
      displayCountryInfo(country.name);
    });
  });
}

function display_name() {
  let country_ddl = document.getElementById("country_ddl");
  let chosen_country = country_ddl.value;
  let span_name = document.getElementById("span_name");
  span_name.innerHTML = chosen_country;
}

function display_name2() {
  let country_ddl = document.getElementById("country_ddl");
  let chosen_country = country_ddl.value;

  displayCountryInfo(chosen_country);

}

// New function: fetch more info on click
function displayCountryInfo(selected_country) {

  fetch(`https://restcountries.com/v3.1/name/${selected_country}`)
    .then((response) => response.json())
    .then((json) => {
      let country_info = document.getElementById('country_info');
      let name = json[0].name.common;
      let capital = json[0].capital[0];

      let population = json[0].population.toLocaleString();
     

      // Display nicely formatted info
      country_info.innerHTML = `
        <h2>${name}</h2>
        <p><b>Capital:</b> ${capital}</p>
        <p><b>Population:</b> ${population}</p>
      `;
    });
}