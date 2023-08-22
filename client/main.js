const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";

const APP_ID = "f557cca5";
const APP_key = "e45177bc7105ae4cccbbfc0ed14556f5";

v=window.localStorage.getItem("myemail")
document.getElementById('myemail').innerHTML=v

// Fetch initial recipes when the page loads
window.addEventListener("load", () => {
    fetchInitialRecipes();
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    fetchAPI();
});

async function fetchInitialRecipes() {
    const initialURL = `https://api.edamam.com/search?q=pasta&app_id=${APP_ID}&app_key=${APP_key}&to=32`;
    const response = await fetch(initialURL);
    const data = await response.json();
    generateHTML(data.hits);
}

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=60`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
}

function generateHTML(results) {
    let generatedHTML = '';
    results.map((result) => {
        generatedHTML += `<div class="item">
            <img src="${result.recipe.image}" alt="image">
            <div class="flex-container">
                <h1 class="title" style="color: peru;">${result.recipe.label}</h1>
                <a class="view-btn" style="color: peru;text-decoration:none;" href="${result.recipe.url}" target="_blank">View Recipe</a>
            </div>
            <p class="item-data">${result.recipe.cuisineType} | Cuisine</p>
            <p class="item-data">${result.recipe.calories.toFixed(2)} | Calories</p>
            <p class="item-data">${result.recipe.dishType} | Dish</p>
        </div>`;
    });
    searchResultDiv.innerHTML = generatedHTML;
}
