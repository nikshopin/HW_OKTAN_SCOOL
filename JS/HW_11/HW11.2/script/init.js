let countElement ;


fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(vaules =>{
        countElement = vaules.recipes.length;
        for (let recipe of vaules.recipes) {
            result = createBlockRecipe(recipe);
            divContainer.append(result);
        }
    });

let divContainer = document.createElement('div');
divContainer.classList.add('container');
document.body.appendChild(divContainer);

function createBlockRecipe (item){
    let divWrap = document.createElement('div');
    divWrap.classList.add('mealWrap');
    let image = document.createElement('img');
    image.classList.add('mealImg');
    let divWrapContent = document.createElement('div');
    divWrapContent.classList.add('mealWrapContent');
    image.src = item.image;
    let about = document.createElement('div');
    let cookingMethod= document.createElement("div");
    let ingredients = document.createElement("div");
    about.classList.add('aboutMeal');
    cookingMethod.classList.add('cookingMethod');
    ingredients.classList.add('ingredients');
    let h3 = document.createElement('h3');
    h3.innerText = 'Name: ' + item.name;
    let pCuisine = document.createElement('p');
    pCuisine.classList.add('cuisine');
    pCuisine.innerText = 'Cuisine: ' + item.name;

    let pDifficulty = document.createElement('p');
    pDifficulty.classList.add('difficulty');
    pDifficulty.innerText = 'Difficulty: ' + item.difficulty;

    let pTimeCook = document.createElement('p');
    pTimeCook.classList.add('timeCook');
    pTimeCook.innerText = 'cookTimeMinutes: '+ item.cookTimeMinutes;


    let pCaloties = document.createElement('p');
    pCaloties.classList.add('caloties');
    pCaloties.innerText = 'Calories: ' + item.caloriesPerServing

    let ulInstructions = document.createElement("ol");
    ulInstructions.classList.add('instructionsList');

    for (let step  of item.instructions ){
        let liInstruction = document.createElement('li');
        liInstruction.classList.add('instructionItem');
        liInstruction.innerText = step;
        ulInstructions.appendChild(liInstruction);
    }
    cookingMethod.append(ulInstructions);
    let ulIngredients = document.createElement("ul");
    for (let ingredient of item.ingredients) {
        let li = document.createElement('li');
        li.classList.add('ingredient');
        li.innerText = ingredient;
        ulIngredients.appendChild(li);
    }

    ingredients.append(ulIngredients);
    about.append(h3, pCuisine, pDifficulty, pTimeCook, pCuisine, pCaloties);
    divWrapContent.append(about, cookingMethod, ingredients);
    console.log(item);
    divWrap.append(image, divWrapContent);
    return divWrap
}

