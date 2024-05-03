class Meal { // returns a meal object - to be given to fillCard
    constructor(name, creator, completionTime, difficulty, instructions) {
        this.name = name; 
        this.creator = creator; 
        this['completion-time'] = completionTime; 
        this.difficulty = difficulty; 
        this.instructions = instructions; 
        this.image = ''; 
    }
}

class MealGroup {
    constructor(name) {
        this.quantity = 0; 
        this.meals = {

        }; 
        this.name = name; 
    }
    nextID = 1; // not returned with object

    getQuantity = () => {
        return this.quantity; 
    }

    addMeal = (mealObj) => {
        this.meals[this.nextID++] = mealObj; 
        this.quantity++; 
    }
}

let breakfastItems = [
    new Meal('Blueberry Muffins',
    'Becky J', 
    '45 minutes', 
    'Easy',
    `<ul> <li>Mix dry ingredients (flour, sugar, baking powder, salt)</li> <li>Combine wet ingredients (eggs, milk, oil, vanilla)</li> <li>Fold in fresh blueberries</li> <li>Bake at 375°F for 20-25 minutes</li> </ul>
    `), 
    new Meal('Breakfast Burrito',
    'Becky J', 
    '30 minutes', 
    'Medium',
    `<ul> <li>Scramble eggs with vegetables and cheese</li> <li>Warm tortillas</li> <li>Fill tortillas with egg mixture and salsa</li> <li>Roll up and serve</li> </ul>`), 
    new Meal('Overnight Oats',
    'Becky J', 
    '8 hours', 
    'Easy',
    `<ul> <li>Mix oats, milk, yogurt, and desired toppings</li> <li>Cover and refrigerate overnight</li> <li>Stir and enjoy in the morning</li> <li>Top with fresh fruit or nuts</li> </ul>`), 
    new Meal('Avocado Toast',
    'Becky J', 
    '10 minutes', 
    'Easy',
    `<ul> <li>Prepare pie crust</li> <li>Cook bacon and onions</li> <li>Mix eggs, cream, and cheese</li> <li>Pour egg mixture into crust and bake</li> </ul>`), 

]

let breakfast = new MealGroup('breakfast'); // same as div name
    // for (let i = 0; i < breakfastItems.length; i++) {
    //     allBreakfast.addMeal(breakfastItems[i]); 
    // }
    breakfastItems.forEach(meal => {
        breakfast.addMeal(meal); 
    })
    // }
    
let lunch = new MealGroup('lunch'); 
let dinner = new MealGroup('dinner');  
let dessert = new MealGroup('dessert') 
let drinks = new MealGroup('drinks'); 

let recipeData = {
    breakfast, 
    lunch, 
    dinner, 
    dessert, 
    drinks
}; 

export { recipeData }; // same name as div on main page


