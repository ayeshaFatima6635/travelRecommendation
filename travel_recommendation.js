let travelData = {};

// Fetch JSON data
fetch("./travel_recommendation_api.json")
.then(response => response.json())
.then(data => {
    travelData = data;
    console.log(travelData);
})
.catch(error => console.log("Error:", error));


// Search Function
function search() {

    let keyword = document.getElementById("searchInput").value.toLowerCase();

    let results = document.getElementById("results");

    results.innerHTML = "";


    if(keyword.includes("beach")) {

        displayResults(travelData.beaches);

    }

    else if(keyword.includes("temple")) {

        displayResults(travelData.temples);

    }

    else if(keyword.includes("country")) {

        let countries = [];

        travelData.countries.forEach(country => {

            country.cities.forEach(city => {

                countries.push(city);

            });

        });

        displayResults(countries);

    }

    else {

        results.innerHTML = "<h3>No recommendations found</h3>";

    }

}



// Display Results Function

function displayResults(items) {


    let results = document.getElementById("results");


    items.forEach(item => {


        let card = document.createElement("div");

        card.className = "card";


        card.innerHTML = `

        <img src="${item.imageUrl}" alt="${item.name}">

        <h3>${item.name}</h3>

        <p>${item.description}</p>

        `;


        results.appendChild(card);


    });


}



// Reset Button

function clearResults(){

    document.getElementById("results").innerHTML="";

    document.getElementById("searchInput").value="";

}