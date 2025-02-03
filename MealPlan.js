$(document).ready(function () {
    const meals = [
        { name: "Grilled Chicken Salad", calories: 350, ingredients: ["Chicken", "Lettuce", "Tomato", "Cucumber", "Dressing"] },
        { name: "Vegetarian Pasta", calories: 400, ingredients: ["Pasta", "Tomato Sauce", "Vegetables", "Cheese"] },
        { name: "Salmon with Quinoa", calories: 450, ingredients: ["Salmon", "Quinoa", "Broccoli", "Lemon"] },
        { name: "Mushroom Risotto", calories: 380, ingredients: ["Arborio Rice", "Mushrooms", "Onion", "Vegetable Broth"] },
        { name: "Turkey Wrap", calories: 300, ingredients: ["Turkey", "Whole Wheat Wrap", "Lettuce", "Tomato", "Hummus"] },
        { name: "Shrimp Stir-Fry", calories: 420, ingredients: ["Shrimp", "Vegetables", "Soy Sauce", "Brown Rice"] },
        { name: "Caprese Sandwich", calories: 350, ingredients: ["Whole Grain Bread", "Tomato", "Mozzarella", "Basil", "Balsamic Glaze"] },
        { name: "Chickpea Salad", calories: 320, ingredients: ["Chickpeas", "Cucumber", "Tomato", "Feta Cheese", "Olive Oil"] },
        { name: "Teriyaki Tofu Bowl", calories: 380, ingredients: ["Tofu", "Broccoli", "Carrots", "Brown Rice", "Teriyaki Sauce"] },
        { name: "Beef and Broccoli", calories: 400, ingredients: ["Beef", "Broccoli", "Soy Sauce", "Garlic", "Brown Rice"] },
    ];

    $("#viewRecipeBtn").click(function () {
        const randomIndex = Math.floor(Math.random() * meals.length);
        const randomMeal = meals[randomIndex];

        $("#mealName").text(randomMeal.name);
        $("#caloriesValue").text(randomMeal.calories);
        const ingredientsList = $("#ingredientsList");
        ingredientsList.empty(); 

        randomMeal.ingredients.forEach(function (ingredient) {
            $("<li>").text(ingredient).appendTo(ingredientsList);
        });

        $("#recipeModal").show();
    });

    $(".close").click(function () {
        $("#recipeModal").hide();
    });

    $(window).click(function (e) {
        if (e.target.id === "recipeModal") {
            $("#recipeModal").hide();
        }
    });
});
const splashHeadText = 'Meal Planner';
const alphaCaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', "'"];
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', "'"];
let output = '';
let progress = 0;
const len = splashHeadText.length;
let isGlitching = false;

function splashHeadGlitch() {
    if (progress >= len || !isGlitching) {
        return;
    }

    const randomNums = Math.floor(Math.random() * alpha.length);
    if (alpha[randomNums] == splashHeadText[progress] || alphaCaps[randomNums] == splashHeadText[progress]) {
        output += splashHeadText[progress];
        document.getElementById('splash-head').innerHTML = `${output}`;
        progress++;
    } else {
        document.getElementById('splash-head').innerHTML = `${output}${alpha[randomNums]}`;
    }

    requestAnimationFrame(splashHeadGlitch);
}

function startSplashHeadGlitch() {
    isGlitching = true;
    splashHeadGlitch();

}

function stopSplashHeadGlitch() {
    isGlitching = false;
}
window.onload = function () {
    startSplashHeadGlitch();
};

var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
