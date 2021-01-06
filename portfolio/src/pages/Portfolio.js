import React from "react";
import randomPasswordImg from "../../images/pwgenerator2.png";
import weaterAppImg from "../../images/weatherDash.png";
import recipeAppImg from "../../images/projectHome.png";
import pizzaClawImg from "../../images/pizzaClaw1.png";

function Portfolio() {
    return (
        <div>
            <main id="portfolio" class="wrapper">
            <section class="content">
            <h2>Portfolio</h2>
            <div class="card mb-3" style={{maxWidth: "750px"}}>
                <div class="row no-gutters">
                <div class="col-md-4">
                    <img src={randomPasswordImg} class="screenshot" alt="random password generator screenshot"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">Random Password Generator</h5>
                    <p class="card-text">An application that produces a random password made up of 8-128 characters. The user selects which characters they would like to include in the password (uppercase letters, lowercase letters, numeric characters or special characters.</p>
                    <h6 class="card-text">Github Repository</h6>
                    <a  class="card-text" href="https://github.com/Lmunoz623/hw-3-random-password-generator-html">https://github.com/Lmunoz623/hw-3-random-password-generator-html</a> 
                    <h6 class="card-text">Deployed Application</h6>
                    <a  class="card-text" href="https://lmunoz623.github.io/hw-3-random-password-generator-html/">https://lmunoz623.github.io/hw-3-random-password-generator-html/</a> 
                    <p class="card-text"><small class="text-muted">Created August 2020</small></p>
                    </div>
                </div>
                </div>
            </div>
            <div class="card mb-3" style={{maxWidth: "750px"}}>
                <div class="row no-gutters">
                <div class="col-md-4">
                    <img src={weaterAppImg} class="screenshot" alt="weather dashoard screenshot"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">Weather Dashboard</h5>
                    <p class="card-text">An application using an API to populate weather data for any city searched.</p>
                    <h6 class="card-text">Github Repository</h6>
                    <a  class="card-text" href="https://github.com/Lmunoz623/hw-6-server-side-API-weather-dashboard">https://github.com/Lmunoz623/hw-6-server-side-API-weather-dashboard</a> 
                    <h6 class="card-text">Deployed Application</h6>
                    <a  class="card-text" href="https://lmunoz623.github.io/hw-6-server-side-API-weather-dashboard">https://lmunoz623.github.io/hw-6-server-side-API-weather-dashboard/</a> 
                    <p class="card-text"><small class="text-muted">Created August 2020</small></p>
                    </div>
                </div>
                </div>
            </div>
            <div class="card mb-3" style={{maxWidth: "750px"}}>
                <div class="row no-gutters">
                <div class="col-md-4">
                    <img src={recipeAppImg} class="screenshot" alt="recipe app screenshot"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">Recipe App</h5>
                    <p class="card-text">This is a recipe application that renders recipes that can be made in 30 minutes or less. The recipes can be searched by a variety if keywords. This application was created as part of a group project using 2 APIs. The first API renders the recipes, the second allows you to send the recipe via email.</p>
                    <h6 class="card-text">Github Repository</h6>
                    <a  class="card-text" href="https://github.com/xtasherx/recipeApp">https://github.com/xtasherx/recipeApp</a> 
                    <h6 class="card-text">Deployed Application</h6>
                    <a  class="card-text" href=" https://xtasherx.github.io/recipeApp/"> https://xtasherx.github.io/recipeApp/</a> 
                    <p class="card-text"><small class="text-muted">Created September 2020</small></p>
                    </div>
                </div>
                </div>
            </div>
            <div class="card mb-3" style={{maxWidth: "750px"}}>
                <div class="row no-gutters">
                <div class="col-md-4">
                    <img src={pizzaClawImg} class="screenshot" alt="pizza claw application screenshot"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">Pizza Claw</h5>
                    <p class="card-text">This is an application created for a restaurant name "Pizza Claw". The application allows for customers to create an account using email and password. The user can then view menu items, order a default pizza or create and order their own pizza with up to three toppings.</p>
                    <h6 class="card-text">Github Repository</h6>
                    <a  class="card-text" href="https://github.com/Feda2020/Project2">https://github.com/Feda2020/Project2</a> 
                    <h6 class="card-text">Deployed Application</h6>
                    <a  class="card-text" href="https://pizzaclawfeda.herokuapp.com/">https://pizzaclawfeda.herokuapp.com/</a> 
                    <p class="card-text"><small class="text-muted">Created November 2020</small></p>
                    </div>
                </div>
                </div>
            </div>
            </section>    
        </main>
    </div>
    );
}

export default Portfolio;