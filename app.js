
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },

    
]

//Example function
function findMexicanFood(){
    let results = dishes.filter(function(el){
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

    return results;
}

let mexicanFood = findMexicanFood();
console.log('Mexican Foods: ', mexicanFood)



//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){
    let results = dishes.filter(function(vg){
        if(vg.cuisine === "Vegetarian"){
            return true;
        }
        else{
            return false;
        }
    })


    return results;
}

let vegetarianFood = problemOne();
console.log("Vegetarian Foods: ", vegetarianFood);

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemTwo(){
    let results = dishes.filter(function(it){
        if(it.cuisine === "Italian" && it.servings > 5){
            return true;
        }
        else{
            return false;
        }
    })
    return results;
}

let italianServeMoreThanFive = problemTwo();
console.log("Italian dishes serving more than five: ", italianServeMoreThanFive);

//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter

function problemThree(){
    let results = dishes.filter(function(match){
        if(match.id === match.servings){
            return true;
        }
        else{
            return false;
        }
    })
    return results;
}

let idMatchServings = problemThree();
console.log("Dishes whose ID matches serving size: ", idMatchServings);

//4. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFour(){
    let results = dishes.filter(function(even){
        if(even.servings % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    })
    return results;
}

let evenServings = problemFour();
console.log("Dishes with even servings numbers: ", evenServings);

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter

function problemFive(){
    let results = dishes.filter(function(tc){
        if(tc.ingredients.includes("tomato") && tc.ingredients.includes("cheese")){
            return true;
        }
        else{
            return false;
        }
    })
    return results;
}

let tomCheese = problemFive();
console.log("Dishes with tomato and cheese: ", tomCheese);

//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Pizza', 'Spaghetti', ...]
//Map

function problemSixA(name){
    let cuisines = name.map(function(element){
        return element.cuisine;
    })
    return cuisines;
}

let cuisineTypes = problemSixA(dishes);
console.log(cuisineTypes);


// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array

// function problemSixB(name){
//     let cuisines = name.map(function(element){
//         return element.cuisine;
//     })
//     let results = cuisines.filter(function(el){
        
//     })
//     return cuisines;
// }

//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map 

function problemSeven(element){
    let cuisineName = element.map(function(ele){
            return ele.cuisine + " " + ele.name;
    })
    return cuisineName;
}

let nameCuisine = problemSeven(dishes);
console.log(nameCuisine);

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

function problemEight(element){
    let results = element.filter(function(vg){
        if(vg.cuisine.includes("Vegetarian")){
            return true;
        }
        else{
            return false;
        }
    })
    let cuisineName = results.map(function(ele){
        return ele.cuisine + " " + ele.name;
    })
    return cuisineName;
}

let veggieCuisine = problemEight(dishes);
console.log(veggieCuisine);


//BONUS
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function problemNine(){
    let results = dishes.filter(function(el){
        if(el.ingredients.includes("chickpea")){
            return true;
        }
        else{
            return false;
        }
    })
    return results;
}

let chickpeaOnly = problemNine();
console.log("Dishes including chickpea: ", chickpeaOnly);

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

function problemTen(servingSize){
    let servingNumbers = servingSize.map(function(el){
        return el.servings;
    })
    let servingsTotal = servingNumbers.reduce(function(total, el){
        return total + el;
    })
    return servingsTotal;
}

let totalServings = problemTen(dishes);
console.log("Total servings: ", totalServings);

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

