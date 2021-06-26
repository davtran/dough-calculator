import data from './recipes.json';
const calculateButton = document.querySelector('#calculate');
const conventionalName = document.querySelector('.conventional #name');
const conventionalFlour = document.querySelector('.conventional #flour');
const conventionalTotalLiquid = document.querySelector('.conventional #total-liquid');
const conventionalYeast = document.querySelector('.conventional #yeast');
const conventionalSalt = document.querySelector('.conventional #salt');


calculateButton.addEventListener('click', function () {
    // calculateHydration(recipe);
    renderRecipe();
});

function renderRecipe() {
    conventionalName.value = data[1].name;
    conventionalFlour.value = data[0].flour;
    conventionalTotalLiquid.value = data[0].water + data[0].milk;
    conventionalYeast.value = data[0].yeast;
    conventionalSalt.value = data[0].salt;
}

// function calculateHydration(recipe) {
//     let totalLiquidVolume = recipe.water;
//     let totalDryWeight = recipe.flour;
//     if (recipe.milk) {
//         totalLiquidVolume = totalLiquidVolume + recipe.milk;
//     }

//     // assumes 100% sourdough hydration
//     if (recipe['sourdough starter']) {
//         totalLiquidVolume = totalLiquidVolume + (recipe['sourdough starter'] / 2);
//         totalDryWeight = totalDryWeight + (recipe['sourdough starter'] / 2);
//     }

//     return `${recipe.name} hydration is ${(totalLiquidVolume / totalDryWeight * 100).toFixed(2)}%`;
// }

// n-multiply a portion size, which should return the scaled up recipe based on n, where n is a number
// it should also handle scaling down such as halving the portion size
// it must maintain the same hydration level
function scaleVolume(recipe) {

}

// returns a modified recipe if using x amount of y hydration sourdough
function sourdoughTranspose(recipe) {

}

// converts an existing sourdough recipe into a regular yeast recipe
function regularTranspose(recipe) {

}

// calculates all the mass values and returns an evenly divided portion value
// questions how does this handle volumetric values ex) oil does not share the same density of water
function divideIntoPortions(recipe) {

}
