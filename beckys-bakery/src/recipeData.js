class Meal { // returns a meal object - to be given to fillCard
    constructor(name, creator, completionTime, difficulty, instructions) {
        this.name = name;
        this.creator = creator;
        this['completion-time'] = completionTime;
        this.difficulty = difficulty;
        this.instructions = instructions;
        this.imgLink = name.split(' ').join(''); 
        this.image = `../src/img/${this.imgLink}.jpg`; // TEMPORARY
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
        `<h3>Instructions: </h3><ul> <li>Mix dry ingredients (flour, sugar, baking powder, salt)</li> <li>Combine wet ingredients (eggs, milk, oil, vanilla)</li> <li>Fold in fresh blueberries</li> <li>Bake at 375°F for 20-25 minutes</li> </ul>
    `),
    new Meal('Breakfast Burrito',
        'Becky J',
        '30 minutes',
        'Medium',
        `<h3>Instructions: </h3><ul> <li>Scramble eggs with vegetables and cheese</li> <li>Warm tortillas</li> <li>Fill tortillas with egg mixture and salsa</li> <li>Roll up and serve</li> </ul>`),
    new Meal('Overnight Oats',
        'Becky J',
        '8 hours',
        'Easy',
        `<h3>Instructions: </h3><ul> <li>Mix oats, milk, yogurt, and desired toppings</li> <li>Cover and refrigerate overnight</li> <li>Stir and enjoy in the morning</li> <li>Top with fresh fruit or nuts</li> </ul>`),
    new Meal('Avocado Toast',
        'Becky J',
        '10 minutes',
        'Easy',
        `<h3>Instructions:</h3>
        <ul>
          <li>Toast bread slices until golden brown</li>
          <li>Cut avocado in half and remove pit</li>
          <li>Scoop out avocado flesh and mash with a fork</li>
          <li>Spread mashed avocado onto toasted bread</li>
        </ul>`),
];


let breakfast = new MealGroup('breakfast'); // same as div name
// for (let i = 0; i < breakfastItems.length; i++) {
//     allBreakfast.addMeal(breakfastItems[i]); 
// }
breakfastItems.forEach(meal => {
    breakfast.addMeal(meal);
})
// }

let lunchItems = [
    new Meal('Quiche Lorraine',
        'Becky J',
        '1 hour',
        'Medium',
        `<h3>Instructions: </h3><ul>
        <li>Prepare pie crust</li> <li>Cook bacon and onions</li> <li>Mix eggs, cream, and cheese</li> <li>Pour egg mixture into crust and bake</li> </ul>`),
    new Meal('Chicken Salad Sandwich', 'Becky J', '30 minutes', 'Easy', `<h3>Instructions: </h3><ul> <li>Shred or chop cooked chicken</li> <li>Mix with mayonnaise, celery, onions, and seasonings</li> <li>Spread on bread or croissant</li> <li>Serve with lettuce and tomato</li> </ul>`),
    new Meal('Vegetable Soup', 'Becky J', '1 hour', 'Medium', `<h3>Instructions: </h3><ul> <li>Sauté onions, carrots, and celery</li> <li>Add broth, tomatoes, and seasonings</li> <li>Simmer and add desired vegetables</li> <li>Serve with crusty bread</li> </ul>`),
    new Meal('BLT Wrap', 'Becky J', '15 minutes', 'Easy', `<h3>Instructions: </h3><ul> <li>Cook bacon until crispy</li> <li>Spread mayonnaise on a tortilla</li> <li>Layer with lettuce, tomato, and bacon</li> <li>Roll up and slice in half</li> </ul>`)];
let lunch = new MealGroup('lunch');
lunchItems.forEach(meal => {
    lunch.addMeal(meal);
});


let dinnerItems = [
    new Meal('Lasagna',
        'Becky J',
        '2 hours',
        'Hard',
        `<h3>Instructions: </h3><ul>
        <li>Cook ground beef and Italian sausage</li> <li>Prepare cheese mixture</li> <li>Layer noodles, meat sauce, and cheese</li> <li>Bake until golden brown</li> </ul>`),
    new Meal('Grilled Salmon', 'Becky J', '30 minutes', 'Medium', `<h3>Instructions: </h3><ul> <li>Season salmon fillets with herbs and lemon</li> <li>Grill or bake until cooked through</li> <li>Serve with roasted vegetables and rice</li> <li>Garnish with lemon wedges</li> </ul>`),
    new Meal('Vegetarian Chili', 'Becky J', '1 hour', 'Medium', `<h3>Instructions: </h3><ul> <li>Sauté onions, bell peppers, and garlic</li> <li>Add beans, tomatoes, and spices</li> <li>Simmer for 30 minutes</li> <li>Serve with cornbread or tortilla chips</li> </ul>`),
    new Meal('Beef Stroganoff', 'Becky J', '1 hour', 'Medium', `<h3>Instructions: </h3><ul> <li>Brown beef and mushrooms</li> <li>Make a roux with butter and flour</li> <li>Add beef broth and sour cream</li> <li>Serve over egg noodles</li> </ul>`)];

let dinner = new MealGroup('dinner');
dinnerItems.forEach(meal => {
    dinner.addMeal(meal);
})
let dessertItems = [
    new Meal('Chocolate Cake',
        'Becky J',
        '1 hour',
        'Medium',
        `<h3>Instructions: </h3><ul>
        <li>Cream butter and sugar</li> <li>Add eggs and vanilla</li> <li>Alternate dry and wet ingredients</li> <li>Bake and frost with chocolate buttercream</li> </ul>`), 
        new Meal('Lemon Bars', 'Becky J', '1 hour', 'Easy', `<h3>Instructions: </h3><ul> <li>Make shortbread crust</li> <li>Prepare lemon filling</li> <li>Pour filling over crust and bake</li> <li>Dust with powdered sugar</li> </ul>`), 
        new Meal('Apple Pie', 'Becky J', '2 hours', 'Hard', `<h3>Instructions: </h3><ul> <li>Make pie crust</li> <li>Peel, core, and slice apples</li> <li>Mix with sugar, spices, and cornstarch</li> <li>Bake until golden brown</li> </ul>`), 
        new Meal('Cheesecake', 'Becky J', '1 hour (plus chilling)', 'Hard', `<h3>Instructions: </h3><ul> <li>Make graham cracker crust</li> <li>Beat cream cheese and sugar</li> <li>Add eggs and vanilla</li> <li>Bake and chill overnight</li> </ul>`)]; 
        let dessert = new MealGroup('dessert');
dessertItems.forEach(meal => {
    dessert.addMeal(meal);
})
let drinkItems = [
    new Meal('Iced Coffee',
        'Becky J',
        '10 minutes',
        'Easy',
        `<h3>Instructions: </h3><ul>
        <li>Brew strong coffee</li> <li>Pour over ice</li> <li>Add milk or cream and sweetener</li> <li>Garnish with whipped cream or cinnamon</li> </ul>`), 
        new Meal('Strawberry Lemonade', 'Becky J', '15 minutes', 'Easy', `<h3>Instructions: </h3><ul> <li>Squeeze fresh lemons</li> <li>Muddle strawberries with sugar</li> <li>Combine lemon juice, strawberry mixture, and water</li> <li>Serve over ice</li> </ul>`), 
        new Meal('Chai Tea Latte', 'Becky J', '10 minutes', 'Medium', `<h3>Instructions: </h3><ul> <li>Brew chai tea</li> <li>Steam milk</li> <li>Froth milk and combine with tea</li> <li>Top with cinnamon or nutmeg</li> </ul>`), 
        new Meal('Smoothie Bowl', 'Becky J', '10 minutes', 'Easy', `<h3>Instructions: </h3><ul> <li>Blend frozen fruit, yogurt, and milk</li> <li>Pour into a bowl</li> <li>Top with granola, fresh fruit, and nuts</li> <li>Drizzle with honey or nut butter</li> </ul>`)]; 
        let drinks = new MealGroup('drinks');
drinkItems.forEach(meal => {
    drinks.addMeal(meal);
})


// let dessert = new MealGroup('dessert');
// let drinks = new MealGroup('drinks');

let recipeData = {
    breakfast,
    lunch,
    dinner,
    dessert,
    drinks
};

export { recipeData }; // same name as div on main page


